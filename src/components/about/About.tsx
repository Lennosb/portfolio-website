import profile from '../../../public/profile.jpg'
import {Image} from '../images/Image'
import {Box} from '../layout/Box'
import {Paragraph} from '../typography/Paragraph'
import {Title} from '../typography/Title'

export const About = () => (
  <div className="container px-4 mx-auto">
    <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
      <div className="lg:px-4 lg:mt-12 ">
        <Title>Hey there,</Title>
        <Box css={{marginTop: '24px'}}>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Paragraph>
        </Box>
      </div>
      <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
        <Image
          src={profile}
          alt="Profile"
          priority
          css={{
            borderRadius: '50%',
          }}
          width={250}
          height={250}
          placeholder="blur"
        />
      </div>
    </div>
  </div>
)
