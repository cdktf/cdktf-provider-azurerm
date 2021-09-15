// https://www.terraform.io/docs/providers/azurerm/r/shared_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#description SharedImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#eula SharedImage#eula}
  */
  readonly eula?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#gallery_name SharedImage#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#hyper_v_generation SharedImage#hyper_v_generation}
  */
  readonly hyperVGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#location SharedImage#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#name SharedImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#os_type SharedImage#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#privacy_statement_uri SharedImage#privacy_statement_uri}
  */
  readonly privacyStatementUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#release_note_uri SharedImage#release_note_uri}
  */
  readonly releaseNoteUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#resource_group_name SharedImage#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#specialized SharedImage#specialized}
  */
  readonly specialized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#tags SharedImage#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#identifier SharedImage#identifier}
  */
  readonly identifier: SharedImageIdentifier[];
  /**
  * purchase_plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#purchase_plan SharedImage#purchase_plan}
  */
  readonly purchasePlan?: SharedImagePurchasePlan[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#timeouts SharedImage#timeouts}
  */
  readonly timeouts?: SharedImageTimeouts;
}
export interface SharedImageIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#offer SharedImage#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#publisher SharedImage#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#sku SharedImage#sku}
  */
  readonly sku: string;
}

function sharedImageIdentifierToTerraform(struct?: SharedImageIdentifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export interface SharedImagePurchasePlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#name SharedImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#product SharedImage#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#publisher SharedImage#publisher}
  */
  readonly publisher?: string;
}

function sharedImagePurchasePlanToTerraform(struct?: SharedImagePurchasePlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export interface SharedImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#create SharedImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#delete SharedImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#read SharedImage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#update SharedImage#update}
  */
  readonly update?: string;
}

function sharedImageTimeoutsToTerraform(struct?: SharedImageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html azurerm_shared_image}
*/
export class SharedImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_shared_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html azurerm_shared_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedImageConfig
  */
  public constructor(scope: Construct, id: string, config: SharedImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eula = config.eula;
    this._galleryName = config.galleryName;
    this._hyperVGeneration = config.hyperVGeneration;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._privacyStatementUri = config.privacyStatementUri;
    this._releaseNoteUri = config.releaseNoteUri;
    this._resourceGroupName = config.resourceGroupName;
    this._specialized = config.specialized;
    this._tags = config.tags;
    this._identifier = config.identifier;
    this._purchasePlan = config.purchasePlan;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // eula - computed: false, optional: true, required: false
  private _eula?: string;
  public get eula() {
    return this.getStringAttribute('eula');
  }
  public set eula(value: string ) {
    this._eula = value;
  }
  public resetEula() {
    this._eula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eulaInput() {
    return this._eula
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName: string;
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName
  }

  // hyper_v_generation - computed: false, optional: true, required: false
  private _hyperVGeneration?: string;
  public get hyperVGeneration() {
    return this.getStringAttribute('hyper_v_generation');
  }
  public set hyperVGeneration(value: string ) {
    this._hyperVGeneration = value;
  }
  public resetHyperVGeneration() {
    this._hyperVGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperVGenerationInput() {
    return this._hyperVGeneration
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // os_type - computed: false, optional: false, required: true
  private _osType: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
  }

  // privacy_statement_uri - computed: false, optional: true, required: false
  private _privacyStatementUri?: string;
  public get privacyStatementUri() {
    return this.getStringAttribute('privacy_statement_uri');
  }
  public set privacyStatementUri(value: string ) {
    this._privacyStatementUri = value;
  }
  public resetPrivacyStatementUri() {
    this._privacyStatementUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyStatementUriInput() {
    return this._privacyStatementUri
  }

  // release_note_uri - computed: false, optional: true, required: false
  private _releaseNoteUri?: string;
  public get releaseNoteUri() {
    return this.getStringAttribute('release_note_uri');
  }
  public set releaseNoteUri(value: string ) {
    this._releaseNoteUri = value;
  }
  public resetReleaseNoteUri() {
    this._releaseNoteUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNoteUriInput() {
    return this._releaseNoteUri
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // specialized - computed: false, optional: true, required: false
  private _specialized?: boolean | cdktf.IResolvable;
  public get specialized() {
    return this.getBooleanAttribute('specialized');
  }
  public set specialized(value: boolean | cdktf.IResolvable ) {
    this._specialized = value;
  }
  public resetSpecialized() {
    this._specialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specializedInput() {
    return this._specialized
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier: SharedImageIdentifier[];
  public get identifier() {
    return this.interpolationForAttribute('identifier') as any;
  }
  public set identifier(value: SharedImageIdentifier[]) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier
  }

  // purchase_plan - computed: false, optional: true, required: false
  private _purchasePlan?: SharedImagePurchasePlan[];
  public get purchasePlan() {
    return this.interpolationForAttribute('purchase_plan') as any;
  }
  public set purchasePlan(value: SharedImagePurchasePlan[] ) {
    this._purchasePlan = value;
  }
  public resetPurchasePlan() {
    this._purchasePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchasePlanInput() {
    return this._purchasePlan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SharedImageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SharedImageTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      eula: cdktf.stringToTerraform(this._eula),
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      hyper_v_generation: cdktf.stringToTerraform(this._hyperVGeneration),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      privacy_statement_uri: cdktf.stringToTerraform(this._privacyStatementUri),
      release_note_uri: cdktf.stringToTerraform(this._releaseNoteUri),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      specialized: cdktf.booleanToTerraform(this._specialized),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identifier: cdktf.listMapper(sharedImageIdentifierToTerraform)(this._identifier),
      purchase_plan: cdktf.listMapper(sharedImagePurchasePlanToTerraform)(this._purchasePlan),
      timeouts: sharedImageTimeoutsToTerraform(this._timeouts),
    };
  }
}
