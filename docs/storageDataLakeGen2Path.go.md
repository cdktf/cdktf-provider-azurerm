# `storageDataLakeGen2Path` Submodule <a name="`storageDataLakeGen2Path` Submodule" id="@cdktf/provider-azurerm.storageDataLakeGen2Path"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDataLakeGen2Path <a name="StorageDataLakeGen2Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path azurerm_storage_data_lake_gen2_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.NewStorageDataLakeGen2Path(scope Construct, id *string, config StorageDataLakeGen2PathConfig) StorageDataLakeGen2Path
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig">StorageDataLakeGen2PathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig">StorageDataLakeGen2PathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce">PutAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetAce">ResetAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAce` <a name="PutAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce"></a>

```go
func PutAce(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putAce.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts"></a>

```go
func PutTimeouts(value StorageDataLakeGen2PathTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

---

##### `ResetAce` <a name="ResetAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetAce"></a>

```go
func ResetAce()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetId"></a>

```go
func ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDataLakeGen2Path resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.StorageDataLakeGen2Path_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.StorageDataLakeGen2Path_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.StorageDataLakeGen2Path_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.StorageDataLakeGen2Path_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageDataLakeGen2Path resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageDataLakeGen2Path to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageDataLakeGen2Path that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageDataLakeGen2Path to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ace">Ace</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList">StorageDataLakeGen2PathAceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference">StorageDataLakeGen2PathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.aceInput">AceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemNameInput">FilesystemNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemName">FilesystemName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ace`<sup>Required</sup> <a name="Ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ace"></a>

```go
func Ace() StorageDataLakeGen2PathAceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList">StorageDataLakeGen2PathAceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeouts"></a>

```go
func Timeouts() StorageDataLakeGen2PathTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference">StorageDataLakeGen2PathTimeoutsOutputReference</a>

---

##### `AceInput`<sup>Optional</sup> <a name="AceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.aceInput"></a>

```go
func AceInput() interface{}
```

- *Type:* interface{}

---

##### `FilesystemNameInput`<sup>Optional</sup> <a name="FilesystemNameInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemNameInput"></a>

```go
func FilesystemNameInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FilesystemName`<sup>Required</sup> <a name="FilesystemName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.filesystemName"></a>

```go
func FilesystemName() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2Path.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDataLakeGen2PathAce <a name="StorageDataLakeGen2PathAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

&storagedatalakegen2path.StorageDataLakeGen2PathAce {
	Permissions: *string,
	Type: *string,
	Id: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.permissions">Permissions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#permissions StorageDataLakeGen2Path#permissions}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#type StorageDataLakeGen2Path#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#scope StorageDataLakeGen2Path#scope}. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#permissions StorageDataLakeGen2Path#permissions}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#type StorageDataLakeGen2Path#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAce.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#scope StorageDataLakeGen2Path#scope}.

---

### StorageDataLakeGen2PathConfig <a name="StorageDataLakeGen2PathConfig" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

&storagedatalakegen2path.StorageDataLakeGen2PathConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FilesystemName: *string,
	Path: *string,
	Resource: *string,
	StorageAccountId: *string,
	Ace: interface{},
	Group: *string,
	Id: *string,
	Owner: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.filesystemName">FilesystemName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#filesystem_name StorageDataLakeGen2Path#filesystem_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#path StorageDataLakeGen2Path#path}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#resource StorageDataLakeGen2Path#resource}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#storage_account_id StorageDataLakeGen2Path#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.ace">Ace</a></code> | <code>interface{}</code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.group">Group</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#group StorageDataLakeGen2Path#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#owner StorageDataLakeGen2Path#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilesystemName`<sup>Required</sup> <a name="FilesystemName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.filesystemName"></a>

```go
FilesystemName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#filesystem_name StorageDataLakeGen2Path#filesystem_name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#path StorageDataLakeGen2Path#path}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#resource StorageDataLakeGen2Path#resource}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#storage_account_id StorageDataLakeGen2Path#storage_account_id}.

---

##### `Ace`<sup>Optional</sup> <a name="Ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.ace"></a>

```go
Ace interface{}
```

- *Type:* interface{}

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#ace StorageDataLakeGen2Path#ace}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#group StorageDataLakeGen2Path#group}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#id StorageDataLakeGen2Path#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#owner StorageDataLakeGen2Path#owner}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathConfig.property.timeouts"></a>

```go
Timeouts StorageDataLakeGen2PathTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts">StorageDataLakeGen2PathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#timeouts StorageDataLakeGen2Path#timeouts}

---

### StorageDataLakeGen2PathTimeouts <a name="StorageDataLakeGen2PathTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

&storagedatalakegen2path.StorageDataLakeGen2PathTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#create StorageDataLakeGen2Path#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#delete StorageDataLakeGen2Path#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#read StorageDataLakeGen2Path#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#update StorageDataLakeGen2Path#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#create StorageDataLakeGen2Path#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#delete StorageDataLakeGen2Path#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#read StorageDataLakeGen2Path#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_data_lake_gen2_path#update StorageDataLakeGen2Path#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDataLakeGen2PathAceList <a name="StorageDataLakeGen2PathAceList" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.NewStorageDataLakeGen2PathAceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageDataLakeGen2PathAceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get"></a>

```go
func Get(index *f64) StorageDataLakeGen2PathAceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageDataLakeGen2PathAceOutputReference <a name="StorageDataLakeGen2PathAceOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.NewStorageDataLakeGen2PathAceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageDataLakeGen2PathAceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathAceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageDataLakeGen2PathTimeoutsOutputReference <a name="StorageDataLakeGen2PathTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagedatalakegen2path"

storagedatalakegen2path.NewStorageDataLakeGen2PathTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageDataLakeGen2PathTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Path.StorageDataLakeGen2PathTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



