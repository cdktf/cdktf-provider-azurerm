// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}
  */
  readonly contentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}
  */
  readonly contentSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}
  */
  readonly customVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}
  */
  readonly dependency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}
  */
  readonly firstPublishDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}
  */
  readonly iconId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}
  */
  readonly lastPublishDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}
  */
  readonly parentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}
  */
  readonly previewImages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}
  */
  readonly previewImagesDark?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}
  */
  readonly providers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}
  */
  readonly threatAnalysisTactics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}
  */
  readonly threatAnalysisTechniques?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * author block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#author SentinelMetadata#author}
  */
  readonly author?: SentinelMetadataAuthor;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#category SentinelMetadata#category}
  */
  readonly category?: SentinelMetadataCategory;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#source SentinelMetadata#source}
  */
  readonly source?: SentinelMetadataSource;
  /**
  * support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#support SentinelMetadata#support}
  */
  readonly support?: SentinelMetadataSupport;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#timeouts SentinelMetadata#timeouts}
  */
  readonly timeouts?: SentinelMetadataTimeouts;
}
export interface SentinelMetadataAuthor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}
  */
  readonly name?: string;
}

export function sentinelMetadataAuthorToTerraform(struct?: SentinelMetadataAuthorOutputReference | SentinelMetadataAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    link: cdktf.stringToTerraform(struct!.link),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sentinelMetadataAuthorToHclTerraform(struct?: SentinelMetadataAuthorOutputReference | SentinelMetadataAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktf.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelMetadataAuthorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelMetadataAuthor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelMetadataAuthor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._link = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._link = value.link;
      this._name = value.name;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface SentinelMetadataCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}
  */
  readonly verticals?: string[];
}

export function sentinelMetadataCategoryToTerraform(struct?: SentinelMetadataCategoryOutputReference | SentinelMetadataCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    verticals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verticals),
  }
}


export function sentinelMetadataCategoryToHclTerraform(struct?: SentinelMetadataCategoryOutputReference | SentinelMetadataCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verticals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verticals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelMetadataCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelMetadataCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._verticals !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticals = this._verticals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelMetadataCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._verticals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._verticals = value.verticals;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // verticals - computed: false, optional: true, required: false
  private _verticals?: string[]; 
  public get verticals() {
    return this.getListAttribute('verticals');
  }
  public set verticals(value: string[]) {
    this._verticals = value;
  }
  public resetVerticals() {
    this._verticals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalsInput() {
    return this._verticals;
  }
}
export interface SentinelMetadataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}
  */
  readonly name?: string;
}

export function sentinelMetadataSourceToTerraform(struct?: SentinelMetadataSourceOutputReference | SentinelMetadataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sentinelMetadataSourceToHclTerraform(struct?: SentinelMetadataSourceOutputReference | SentinelMetadataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelMetadataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelMetadataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelMetadataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface SentinelMetadataSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}
  */
  readonly tier: string;
}

export function sentinelMetadataSupportToTerraform(struct?: SentinelMetadataSupportOutputReference | SentinelMetadataSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    link: cdktf.stringToTerraform(struct!.link),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function sentinelMetadataSupportToHclTerraform(struct?: SentinelMetadataSupportOutputReference | SentinelMetadataSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktf.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelMetadataSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelMetadataSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelMetadataSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._link = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._link = value.link;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface SentinelMetadataTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}
  */
  readonly update?: string;
}

export function sentinelMetadataTimeoutsToTerraform(struct?: SentinelMetadataTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sentinelMetadataTimeoutsToHclTerraform(struct?: SentinelMetadataTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelMetadataTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelMetadataTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelMetadataTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata azurerm_sentinel_metadata}
*/
export class SentinelMetadata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SentinelMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelMetadata to import
  * @param importFromId The id of the existing SentinelMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_metadata azurerm_sentinel_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_metadata',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentId = config.contentId;
    this._contentSchemaVersion = config.contentSchemaVersion;
    this._customVersion = config.customVersion;
    this._dependency = config.dependency;
    this._firstPublishDate = config.firstPublishDate;
    this._iconId = config.iconId;
    this._id = config.id;
    this._kind = config.kind;
    this._lastPublishDate = config.lastPublishDate;
    this._name = config.name;
    this._parentId = config.parentId;
    this._previewImages = config.previewImages;
    this._previewImagesDark = config.previewImagesDark;
    this._providers = config.providers;
    this._threatAnalysisTactics = config.threatAnalysisTactics;
    this._threatAnalysisTechniques = config.threatAnalysisTechniques;
    this._version = config.version;
    this._workspaceId = config.workspaceId;
    this._author.internalValue = config.author;
    this._category.internalValue = config.category;
    this._source.internalValue = config.source;
    this._support.internalValue = config.support;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_id - computed: false, optional: false, required: true
  private _contentId?: string; 
  public get contentId() {
    return this.getStringAttribute('content_id');
  }
  public set contentId(value: string) {
    this._contentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId;
  }

  // content_schema_version - computed: false, optional: true, required: false
  private _contentSchemaVersion?: string; 
  public get contentSchemaVersion() {
    return this.getStringAttribute('content_schema_version');
  }
  public set contentSchemaVersion(value: string) {
    this._contentSchemaVersion = value;
  }
  public resetContentSchemaVersion() {
    this._contentSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSchemaVersionInput() {
    return this._contentSchemaVersion;
  }

  // custom_version - computed: false, optional: true, required: false
  private _customVersion?: string; 
  public get customVersion() {
    return this.getStringAttribute('custom_version');
  }
  public set customVersion(value: string) {
    this._customVersion = value;
  }
  public resetCustomVersion() {
    this._customVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionInput() {
    return this._customVersion;
  }

  // dependency - computed: false, optional: true, required: false
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  public resetDependency() {
    this._dependency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // first_publish_date - computed: false, optional: true, required: false
  private _firstPublishDate?: string; 
  public get firstPublishDate() {
    return this.getStringAttribute('first_publish_date');
  }
  public set firstPublishDate(value: string) {
    this._firstPublishDate = value;
  }
  public resetFirstPublishDate() {
    this._firstPublishDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstPublishDateInput() {
    return this._firstPublishDate;
  }

  // icon_id - computed: false, optional: true, required: false
  private _iconId?: string; 
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }
  public set iconId(value: string) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // last_publish_date - computed: false, optional: true, required: false
  private _lastPublishDate?: string; 
  public get lastPublishDate() {
    return this.getStringAttribute('last_publish_date');
  }
  public set lastPublishDate(value: string) {
    this._lastPublishDate = value;
  }
  public resetLastPublishDate() {
    this._lastPublishDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPublishDateInput() {
    return this._lastPublishDate;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // preview_images - computed: false, optional: true, required: false
  private _previewImages?: string[]; 
  public get previewImages() {
    return this.getListAttribute('preview_images');
  }
  public set previewImages(value: string[]) {
    this._previewImages = value;
  }
  public resetPreviewImages() {
    this._previewImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewImagesInput() {
    return this._previewImages;
  }

  // preview_images_dark - computed: false, optional: true, required: false
  private _previewImagesDark?: string[]; 
  public get previewImagesDark() {
    return this.getListAttribute('preview_images_dark');
  }
  public set previewImagesDark(value: string[]) {
    this._previewImagesDark = value;
  }
  public resetPreviewImagesDark() {
    this._previewImagesDark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewImagesDarkInput() {
    return this._previewImagesDark;
  }

  // providers - computed: false, optional: true, required: false
  private _providers?: string[]; 
  public get providers() {
    return this.getListAttribute('providers');
  }
  public set providers(value: string[]) {
    this._providers = value;
  }
  public resetProviders() {
    this._providers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }

  // threat_analysis_tactics - computed: false, optional: true, required: false
  private _threatAnalysisTactics?: string[]; 
  public get threatAnalysisTactics() {
    return this.getListAttribute('threat_analysis_tactics');
  }
  public set threatAnalysisTactics(value: string[]) {
    this._threatAnalysisTactics = value;
  }
  public resetThreatAnalysisTactics() {
    this._threatAnalysisTactics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisTacticsInput() {
    return this._threatAnalysisTactics;
  }

  // threat_analysis_techniques - computed: false, optional: true, required: false
  private _threatAnalysisTechniques?: string[]; 
  public get threatAnalysisTechniques() {
    return this.getListAttribute('threat_analysis_techniques');
  }
  public set threatAnalysisTechniques(value: string[]) {
    this._threatAnalysisTechniques = value;
  }
  public resetThreatAnalysisTechniques() {
    this._threatAnalysisTechniques = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisTechniquesInput() {
    return this._threatAnalysisTechniques;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // author - computed: false, optional: true, required: false
  private _author = new SentinelMetadataAuthorOutputReference(this, "author");
  public get author() {
    return this._author;
  }
  public putAuthor(value: SentinelMetadataAuthor) {
    this._author.internalValue = value;
  }
  public resetAuthor() {
    this._author.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category = new SentinelMetadataCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: SentinelMetadataCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new SentinelMetadataSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SentinelMetadataSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // support - computed: false, optional: true, required: false
  private _support = new SentinelMetadataSupportOutputReference(this, "support");
  public get support() {
    return this._support;
  }
  public putSupport(value: SentinelMetadataSupport) {
    this._support.internalValue = value;
  }
  public resetSupport() {
    this._support.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelMetadataTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelMetadataTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_id: cdktf.stringToTerraform(this._contentId),
      content_schema_version: cdktf.stringToTerraform(this._contentSchemaVersion),
      custom_version: cdktf.stringToTerraform(this._customVersion),
      dependency: cdktf.stringToTerraform(this._dependency),
      first_publish_date: cdktf.stringToTerraform(this._firstPublishDate),
      icon_id: cdktf.stringToTerraform(this._iconId),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      last_publish_date: cdktf.stringToTerraform(this._lastPublishDate),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      preview_images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._previewImages),
      preview_images_dark: cdktf.listMapper(cdktf.stringToTerraform, false)(this._previewImagesDark),
      providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._providers),
      threat_analysis_tactics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._threatAnalysisTactics),
      threat_analysis_techniques: cdktf.listMapper(cdktf.stringToTerraform, false)(this._threatAnalysisTechniques),
      version: cdktf.stringToTerraform(this._version),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      author: sentinelMetadataAuthorToTerraform(this._author.internalValue),
      category: sentinelMetadataCategoryToTerraform(this._category.internalValue),
      source: sentinelMetadataSourceToTerraform(this._source.internalValue),
      support: sentinelMetadataSupportToTerraform(this._support.internalValue),
      timeouts: sentinelMetadataTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_id: {
        value: cdktf.stringToHclTerraform(this._contentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_schema_version: {
        value: cdktf.stringToHclTerraform(this._contentSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_version: {
        value: cdktf.stringToHclTerraform(this._customVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependency: {
        value: cdktf.stringToHclTerraform(this._dependency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_publish_date: {
        value: cdktf.stringToHclTerraform(this._firstPublishDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_id: {
        value: cdktf.stringToHclTerraform(this._iconId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_publish_date: {
        value: cdktf.stringToHclTerraform(this._lastPublishDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview_images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._previewImages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preview_images_dark: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._previewImagesDark),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._providers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threat_analysis_tactics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._threatAnalysisTactics),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threat_analysis_techniques: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._threatAnalysisTechniques),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author: {
        value: sentinelMetadataAuthorToHclTerraform(this._author.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelMetadataAuthorList",
      },
      category: {
        value: sentinelMetadataCategoryToHclTerraform(this._category.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelMetadataCategoryList",
      },
      source: {
        value: sentinelMetadataSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelMetadataSourceList",
      },
      support: {
        value: sentinelMetadataSupportToHclTerraform(this._support.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelMetadataSupportList",
      },
      timeouts: {
        value: sentinelMetadataTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelMetadataTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
