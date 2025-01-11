# `stackHciMarketplaceGalleryImage` Submodule <a name="`stackHciMarketplaceGalleryImage` Submodule" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciMarketplaceGalleryImage <a name="StackHciMarketplaceGalleryImage" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image azurerm_stack_hci_marketplace_gallery_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.NewStackHciMarketplaceGalleryImage(scope Construct, id *string, config StackHciMarketplaceGalleryImageConfig) StackHciMarketplaceGalleryImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig">StackHciMarketplaceGalleryImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig">StackHciMarketplaceGalleryImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier">PutIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId">ResetStoragePathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentifier` <a name="PutIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier"></a>

```go
func PutIdentifier(value StackHciMarketplaceGalleryImageIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts"></a>

```go
func PutTimeouts(value StackHciMarketplaceGalleryImageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId"></a>

```go
func ResetId()
```

##### `ResetStoragePathId` <a name="ResetStoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId"></a>

```go
func ResetStoragePathId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImage_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackHciMarketplaceGalleryImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackHciMarketplaceGalleryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackHciMarketplaceGalleryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier">Identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput">HypervGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput">IdentifierInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput">StoragePathIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId">CustomLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration">HypervGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId">StoragePathId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier"></a>

```go
func Identifier() StackHciMarketplaceGalleryImageIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts"></a>

```go
func Timeouts() StackHciMarketplaceGalleryImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a>

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput"></a>

```go
func CustomLocationIdInput() *string
```

- *Type:* *string

---

##### `HypervGenerationInput`<sup>Optional</sup> <a name="HypervGenerationInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput"></a>

```go
func HypervGenerationInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput"></a>

```go
func IdentifierInput() StackHciMarketplaceGalleryImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StoragePathIdInput`<sup>Optional</sup> <a name="StoragePathIdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput"></a>

```go
func StoragePathIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId"></a>

```go
func CustomLocationId() *string
```

- *Type:* *string

---

##### `HypervGeneration`<sup>Required</sup> <a name="HypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration"></a>

```go
func HypervGeneration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StoragePathId`<sup>Required</sup> <a name="StoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId"></a>

```go
func StoragePathId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciMarketplaceGalleryImageConfig <a name="StackHciMarketplaceGalleryImageConfig" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

&stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomLocationId: *string,
	HypervGeneration: *string,
	Identifier: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier,
	Location: *string,
	Name: *string,
	OsType: *string,
	ResourceGroupName: *string,
	Version: *string,
	Id: *string,
	StoragePathId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId">CustomLocationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration">HypervGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier">Identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId">StoragePathId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId"></a>

```go
CustomLocationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}.

---

##### `HypervGeneration`<sup>Required</sup> <a name="HypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration"></a>

```go
HypervGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier"></a>

```go
Identifier StackHciMarketplaceGalleryImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#identifier StackHciMarketplaceGalleryImage#identifier}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}.

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StoragePathId`<sup>Optional</sup> <a name="StoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId"></a>

```go
StoragePathId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts"></a>

```go
Timeouts StackHciMarketplaceGalleryImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#timeouts StackHciMarketplaceGalleryImage#timeouts}

---

### StackHciMarketplaceGalleryImageIdentifier <a name="StackHciMarketplaceGalleryImageIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

&stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImageIdentifier {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}.

---

### StackHciMarketplaceGalleryImageTimeouts <a name="StackHciMarketplaceGalleryImageTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

&stackhcimarketplacegalleryimage.StackHciMarketplaceGalleryImageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciMarketplaceGalleryImageIdentifierOutputReference <a name="StackHciMarketplaceGalleryImageIdentifierOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.NewStackHciMarketplaceGalleryImageIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackHciMarketplaceGalleryImageIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() StackHciMarketplaceGalleryImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---


### StackHciMarketplaceGalleryImageTimeoutsOutputReference <a name="StackHciMarketplaceGalleryImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/stackhcimarketplacegalleryimage"

stackhcimarketplacegalleryimage.NewStackHciMarketplaceGalleryImageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackHciMarketplaceGalleryImageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



