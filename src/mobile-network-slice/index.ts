// https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkSliceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#description MobileNetworkSlice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#id MobileNetworkSlice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#location MobileNetworkSlice#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#mobile_network_id MobileNetworkSlice#mobile_network_id}
  */
  readonly mobileNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#name MobileNetworkSlice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#tags MobileNetworkSlice#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * single_network_slice_selection_assistance_information block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#single_network_slice_selection_assistance_information MobileNetworkSlice#single_network_slice_selection_assistance_information}
  */
  readonly singleNetworkSliceSelectionAssistanceInformation: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#timeouts MobileNetworkSlice#timeouts}
  */
  readonly timeouts?: MobileNetworkSliceTimeouts;
}
export interface MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#slice_differentiator MobileNetworkSlice#slice_differentiator}
  */
  readonly sliceDifferentiator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#slice_service_type MobileNetworkSlice#slice_service_type}
  */
  readonly sliceServiceType: number;
}

export function mobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationToTerraform(struct?: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference | MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slice_differentiator: cdktf.stringToTerraform(struct!.sliceDifferentiator),
    slice_service_type: cdktf.numberToTerraform(struct!.sliceServiceType),
  }
}

export class MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sliceDifferentiator !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliceDifferentiator = this._sliceDifferentiator;
    }
    if (this._sliceServiceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliceServiceType = this._sliceServiceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sliceDifferentiator = undefined;
      this._sliceServiceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sliceDifferentiator = value.sliceDifferentiator;
      this._sliceServiceType = value.sliceServiceType;
    }
  }

  // slice_differentiator - computed: false, optional: true, required: false
  private _sliceDifferentiator?: string; 
  public get sliceDifferentiator() {
    return this.getStringAttribute('slice_differentiator');
  }
  public set sliceDifferentiator(value: string) {
    this._sliceDifferentiator = value;
  }
  public resetSliceDifferentiator() {
    this._sliceDifferentiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceDifferentiatorInput() {
    return this._sliceDifferentiator;
  }

  // slice_service_type - computed: false, optional: false, required: true
  private _sliceServiceType?: number; 
  public get sliceServiceType() {
    return this.getNumberAttribute('slice_service_type');
  }
  public set sliceServiceType(value: number) {
    this._sliceServiceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceServiceTypeInput() {
    return this._sliceServiceType;
  }
}
export interface MobileNetworkSliceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#create MobileNetworkSlice#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#delete MobileNetworkSlice#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#read MobileNetworkSlice#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice#update MobileNetworkSlice#update}
  */
  readonly update?: string;
}

export function mobileNetworkSliceTimeoutsToTerraform(struct?: MobileNetworkSliceTimeoutsOutputReference | MobileNetworkSliceTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkSliceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkSliceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkSliceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice azurerm_mobile_network_slice}
*/
export class MobileNetworkSlice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_slice";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mobile_network_slice azurerm_mobile_network_slice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkSliceConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkSliceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_slice',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.46.0',
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
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._mobileNetworkId = config.mobileNetworkId;
    this._name = config.name;
    this._tags = config.tags;
    this._singleNetworkSliceSelectionAssistanceInformation.internalValue = config.singleNetworkSliceSelectionAssistanceInformation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mobile_network_id - computed: false, optional: false, required: true
  private _mobileNetworkId?: string; 
  public get mobileNetworkId() {
    return this.getStringAttribute('mobile_network_id');
  }
  public set mobileNetworkId(value: string) {
    this._mobileNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNetworkIdInput() {
    return this._mobileNetworkId;
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

  // single_network_slice_selection_assistance_information - computed: false, optional: false, required: true
  private _singleNetworkSliceSelectionAssistanceInformation = new MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference(this, "single_network_slice_selection_assistance_information");
  public get singleNetworkSliceSelectionAssistanceInformation() {
    return this._singleNetworkSliceSelectionAssistanceInformation;
  }
  public putSingleNetworkSliceSelectionAssistanceInformation(value: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation) {
    this._singleNetworkSliceSelectionAssistanceInformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleNetworkSliceSelectionAssistanceInformationInput() {
    return this._singleNetworkSliceSelectionAssistanceInformation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkSliceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkSliceTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mobile_network_id: cdktf.stringToTerraform(this._mobileNetworkId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      single_network_slice_selection_assistance_information: mobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationToTerraform(this._singleNetworkSliceSelectionAssistanceInformation.internalValue),
      timeouts: mobileNetworkSliceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
