import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { useMoveBack } from '@/hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div>
      <div>
        <Heading as="h1">The page you are looking for could not be found 😢</Heading>
        <Button onClick={moveBack} size={'sm'} variant="outline">
          &larr; Go back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
