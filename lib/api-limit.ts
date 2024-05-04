import { auth } from '@clerk/nextjs/server';
import prismadb from '@/lib/prismadb';
import { MAX_FREE_COUNTS } from '@/constants';

export const increaseApiLimit = async (): Promise<void> => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId
    }
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 }
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 }
    });
  }
};

export const checkApiLimit = async (): Promise<boolean | undefined> => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId }
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async (): Promise<number> => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId }
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
