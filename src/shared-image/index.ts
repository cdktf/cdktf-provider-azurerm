// https://www.terraform.io/docs/providers/azurerm/r/shared_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}
  */
  readonly acceleratedNetworkSupportEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#architecture SharedImage#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#description SharedImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}
  */
  readonly diskTypesNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#end_of_life_date SharedImage#end_of_life_date}
  */
  readonly endOfLifeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#eula SharedImage#eula}
  */
  readonly eula?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#gallery_name SharedImage#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#hyper_v_generation SharedImage#hyper_v_generation}
  */
  readonly hyperVGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#id SharedImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#location SharedImage#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}
  */
  readonly maxRecommendedMemoryInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}
  */
  readonly maxRecommendedVcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}
  */
  readonly minRecommendedMemoryInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}
  */
  readonly minRecommendedVcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#name SharedImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#os_type SharedImage#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}
  */
  readonly privacyStatementUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#release_note_uri SharedImage#release_note_uri}
  */
  readonly releaseNoteUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#resource_group_name SharedImage#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#specialized SharedImage#specialized}
  */
  readonly specialized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#tags SharedImage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}
  */
  readonly trustedLaunchEnabled?: boolean | cdktf.IResolvable;
  /**
  * identifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#identifier SharedImage#identifier}
  */
  readonly identifier: SharedImageIdentifier;
  /**
  * purchase_plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#purchase_plan SharedImage#purchase_plan}
  */
  readonly purchasePlan?: SharedImagePurchasePlan;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#timeouts SharedImage#timeouts}
  */
  readonly timeouts?: SharedImageTimeouts;
}
export interface SharedImageIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#offer SharedImage#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#publisher SharedImage#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#sku SharedImage#sku}
  */
  readonly sku: string;
}

export function sharedImageIdentifierToTerraform(struct?: SharedImageIdentifierOutputReference | SharedImageIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export class SharedImageIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImageIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }
}
export interface SharedImagePurchasePlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#name SharedImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#product SharedImage#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#publisher SharedImage#publisher}
  */
  readonly publisher?: string;
}

export function sharedImagePurchasePlanToTerraform(struct?: SharedImagePurchasePlanOutputReference | SharedImagePurchasePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class SharedImagePurchasePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImagePurchasePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImagePurchasePlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
    }
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

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }
}
export interface SharedImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#create SharedImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#delete SharedImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#read SharedImage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image#update SharedImage#update}
  */
  readonly update?: string;
}

export function sharedImageTimeoutsToTerraform(struct?: SharedImageTimeoutsOutputReference | SharedImageTimeouts | cdktf.IResolvable): any {
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

export class SharedImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SharedImageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image azurerm_shared_image}
*/
export class SharedImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_shared_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image azurerm_shared_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedImageConfig
  */
  public constructor(scope: Construct, id: string, config: SharedImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.36.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratedNetworkSupportEnabled = config.acceleratedNetworkSupportEnabled;
    this._architecture = config.architecture;
    this._description = config.description;
    this._diskTypesNotAllowed = config.diskTypesNotAllowed;
    this._endOfLifeDate = config.endOfLifeDate;
    this._eula = config.eula;
    this._galleryName = config.galleryName;
    this._hyperVGeneration = config.hyperVGeneration;
    this._id = config.id;
    this._location = config.location;
    this._maxRecommendedMemoryInGb = config.maxRecommendedMemoryInGb;
    this._maxRecommendedVcpuCount = config.maxRecommendedVcpuCount;
    this._minRecommendedMemoryInGb = config.minRecommendedMemoryInGb;
    this._minRecommendedVcpuCount = config.minRecommendedVcpuCount;
    this._name = config.name;
    this._osType = config.osType;
    this._privacyStatementUri = config.privacyStatementUri;
    this._releaseNoteUri = config.releaseNoteUri;
    this._resourceGroupName = config.resourceGroupName;
    this._specialized = config.specialized;
    this._tags = config.tags;
    this._trustedLaunchEnabled = config.trustedLaunchEnabled;
    this._identifier.internalValue = config.identifier;
    this._purchasePlan.internalValue = config.purchasePlan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_network_support_enabled - computed: false, optional: true, required: false
  private _acceleratedNetworkSupportEnabled?: boolean | cdktf.IResolvable; 
  public get acceleratedNetworkSupportEnabled() {
    return this.getBooleanAttribute('accelerated_network_support_enabled');
  }
  public set acceleratedNetworkSupportEnabled(value: boolean | cdktf.IResolvable) {
    this._acceleratedNetworkSupportEnabled = value;
  }
  public resetAcceleratedNetworkSupportEnabled() {
    this._acceleratedNetworkSupportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkSupportEnabledInput() {
    return this._acceleratedNetworkSupportEnabled;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disk_types_not_allowed - computed: false, optional: true, required: false
  private _diskTypesNotAllowed?: string[]; 
  public get diskTypesNotAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_types_not_allowed'));
  }
  public set diskTypesNotAllowed(value: string[]) {
    this._diskTypesNotAllowed = value;
  }
  public resetDiskTypesNotAllowed() {
    this._diskTypesNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypesNotAllowedInput() {
    return this._diskTypesNotAllowed;
  }

  // end_of_life_date - computed: false, optional: true, required: false
  private _endOfLifeDate?: string; 
  public get endOfLifeDate() {
    return this.getStringAttribute('end_of_life_date');
  }
  public set endOfLifeDate(value: string) {
    this._endOfLifeDate = value;
  }
  public resetEndOfLifeDate() {
    this._endOfLifeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOfLifeDateInput() {
    return this._endOfLifeDate;
  }

  // eula - computed: false, optional: true, required: false
  private _eula?: string; 
  public get eula() {
    return this.getStringAttribute('eula');
  }
  public set eula(value: string) {
    this._eula = value;
  }
  public resetEula() {
    this._eula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eulaInput() {
    return this._eula;
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName?: string; 
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName;
  }

  // hyper_v_generation - computed: false, optional: true, required: false
  private _hyperVGeneration?: string; 
  public get hyperVGeneration() {
    return this.getStringAttribute('hyper_v_generation');
  }
  public set hyperVGeneration(value: string) {
    this._hyperVGeneration = value;
  }
  public resetHyperVGeneration() {
    this._hyperVGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperVGenerationInput() {
    return this._hyperVGeneration;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_recommended_memory_in_gb - computed: false, optional: true, required: false
  private _maxRecommendedMemoryInGb?: number; 
  public get maxRecommendedMemoryInGb() {
    return this.getNumberAttribute('max_recommended_memory_in_gb');
  }
  public set maxRecommendedMemoryInGb(value: number) {
    this._maxRecommendedMemoryInGb = value;
  }
  public resetMaxRecommendedMemoryInGb() {
    this._maxRecommendedMemoryInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecommendedMemoryInGbInput() {
    return this._maxRecommendedMemoryInGb;
  }

  // max_recommended_vcpu_count - computed: false, optional: true, required: false
  private _maxRecommendedVcpuCount?: number; 
  public get maxRecommendedVcpuCount() {
    return this.getNumberAttribute('max_recommended_vcpu_count');
  }
  public set maxRecommendedVcpuCount(value: number) {
    this._maxRecommendedVcpuCount = value;
  }
  public resetMaxRecommendedVcpuCount() {
    this._maxRecommendedVcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecommendedVcpuCountInput() {
    return this._maxRecommendedVcpuCount;
  }

  // min_recommended_memory_in_gb - computed: false, optional: true, required: false
  private _minRecommendedMemoryInGb?: number; 
  public get minRecommendedMemoryInGb() {
    return this.getNumberAttribute('min_recommended_memory_in_gb');
  }
  public set minRecommendedMemoryInGb(value: number) {
    this._minRecommendedMemoryInGb = value;
  }
  public resetMinRecommendedMemoryInGb() {
    this._minRecommendedMemoryInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRecommendedMemoryInGbInput() {
    return this._minRecommendedMemoryInGb;
  }

  // min_recommended_vcpu_count - computed: false, optional: true, required: false
  private _minRecommendedVcpuCount?: number; 
  public get minRecommendedVcpuCount() {
    return this.getNumberAttribute('min_recommended_vcpu_count');
  }
  public set minRecommendedVcpuCount(value: number) {
    this._minRecommendedVcpuCount = value;
  }
  public resetMinRecommendedVcpuCount() {
    this._minRecommendedVcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRecommendedVcpuCountInput() {
    return this._minRecommendedVcpuCount;
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

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // privacy_statement_uri - computed: false, optional: true, required: false
  private _privacyStatementUri?: string; 
  public get privacyStatementUri() {
    return this.getStringAttribute('privacy_statement_uri');
  }
  public set privacyStatementUri(value: string) {
    this._privacyStatementUri = value;
  }
  public resetPrivacyStatementUri() {
    this._privacyStatementUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyStatementUriInput() {
    return this._privacyStatementUri;
  }

  // release_note_uri - computed: false, optional: true, required: false
  private _releaseNoteUri?: string; 
  public get releaseNoteUri() {
    return this.getStringAttribute('release_note_uri');
  }
  public set releaseNoteUri(value: string) {
    this._releaseNoteUri = value;
  }
  public resetReleaseNoteUri() {
    this._releaseNoteUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNoteUriInput() {
    return this._releaseNoteUri;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // specialized - computed: false, optional: true, required: false
  private _specialized?: boolean | cdktf.IResolvable; 
  public get specialized() {
    return this.getBooleanAttribute('specialized');
  }
  public set specialized(value: boolean | cdktf.IResolvable) {
    this._specialized = value;
  }
  public resetSpecialized() {
    this._specialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specializedInput() {
    return this._specialized;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trusted_launch_enabled - computed: false, optional: true, required: false
  private _trustedLaunchEnabled?: boolean | cdktf.IResolvable; 
  public get trustedLaunchEnabled() {
    return this.getBooleanAttribute('trusted_launch_enabled');
  }
  public set trustedLaunchEnabled(value: boolean | cdktf.IResolvable) {
    this._trustedLaunchEnabled = value;
  }
  public resetTrustedLaunchEnabled() {
    this._trustedLaunchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedLaunchEnabledInput() {
    return this._trustedLaunchEnabled;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier = new SharedImageIdentifierOutputReference(this, "identifier");
  public get identifier() {
    return this._identifier;
  }
  public putIdentifier(value: SharedImageIdentifier) {
    this._identifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier.internalValue;
  }

  // purchase_plan - computed: false, optional: true, required: false
  private _purchasePlan = new SharedImagePurchasePlanOutputReference(this, "purchase_plan");
  public get purchasePlan() {
    return this._purchasePlan;
  }
  public putPurchasePlan(value: SharedImagePurchasePlan) {
    this._purchasePlan.internalValue = value;
  }
  public resetPurchasePlan() {
    this._purchasePlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchasePlanInput() {
    return this._purchasePlan.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SharedImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SharedImageTimeouts) {
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
      accelerated_network_support_enabled: cdktf.booleanToTerraform(this._acceleratedNetworkSupportEnabled),
      architecture: cdktf.stringToTerraform(this._architecture),
      description: cdktf.stringToTerraform(this._description),
      disk_types_not_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskTypesNotAllowed),
      end_of_life_date: cdktf.stringToTerraform(this._endOfLifeDate),
      eula: cdktf.stringToTerraform(this._eula),
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      hyper_v_generation: cdktf.stringToTerraform(this._hyperVGeneration),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_recommended_memory_in_gb: cdktf.numberToTerraform(this._maxRecommendedMemoryInGb),
      max_recommended_vcpu_count: cdktf.numberToTerraform(this._maxRecommendedVcpuCount),
      min_recommended_memory_in_gb: cdktf.numberToTerraform(this._minRecommendedMemoryInGb),
      min_recommended_vcpu_count: cdktf.numberToTerraform(this._minRecommendedVcpuCount),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      privacy_statement_uri: cdktf.stringToTerraform(this._privacyStatementUri),
      release_note_uri: cdktf.stringToTerraform(this._releaseNoteUri),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      specialized: cdktf.booleanToTerraform(this._specialized),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trusted_launch_enabled: cdktf.booleanToTerraform(this._trustedLaunchEnabled),
      identifier: sharedImageIdentifierToTerraform(this._identifier.internalValue),
      purchase_plan: sharedImagePurchasePlanToTerraform(this._purchasePlan.internalValue),
      timeouts: sharedImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
