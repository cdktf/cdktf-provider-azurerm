# `virtualMachineRestorePointCollection` Submodule <a name="`virtualMachineRestorePointCollection` Submodule" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRestorePointCollection <a name="VirtualMachineRestorePointCollection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection azurerm_virtual_machine_restore_point_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

virtualmachinerestorepointcollection.NewVirtualMachineRestorePointCollection(scope Construct, id *string, config VirtualMachineRestorePointCollectionConfig) VirtualMachineRestorePointCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig">VirtualMachineRestorePointCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig">VirtualMachineRestorePointCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachineRestorePointCollectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineRestorePointCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

virtualmachinerestorepointcollection.VirtualMachineRestorePointCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

virtualmachinerestorepointcollection.VirtualMachineRestorePointCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

virtualmachinerestorepointcollection.VirtualMachineRestorePointCollection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

virtualmachinerestorepointcollection.VirtualMachineRestorePointCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachineRestorePointCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachineRestorePointCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachineRestorePointCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRestorePointCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference">VirtualMachineRestorePointCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineIdInput">SourceVirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineId">SourceVirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeouts"></a>

```go
func Timeouts() VirtualMachineRestorePointCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference">VirtualMachineRestorePointCollectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SourceVirtualMachineIdInput`<sup>Optional</sup> <a name="SourceVirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineIdInput"></a>

```go
func SourceVirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SourceVirtualMachineId`<sup>Required</sup> <a name="SourceVirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.sourceVirtualMachineId"></a>

```go
func SourceVirtualMachineId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRestorePointCollectionConfig <a name="VirtualMachineRestorePointCollectionConfig" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

&virtualmachinerestorepointcollection.VirtualMachineRestorePointCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SourceVirtualMachineId: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#location VirtualMachineRestorePointCollection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#name VirtualMachineRestorePointCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#resource_group_name VirtualMachineRestorePointCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.sourceVirtualMachineId">SourceVirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#source_virtual_machine_id VirtualMachineRestorePointCollection#source_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#id VirtualMachineRestorePointCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#tags VirtualMachineRestorePointCollection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#location VirtualMachineRestorePointCollection#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#name VirtualMachineRestorePointCollection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#resource_group_name VirtualMachineRestorePointCollection#resource_group_name}.

---

##### `SourceVirtualMachineId`<sup>Required</sup> <a name="SourceVirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.sourceVirtualMachineId"></a>

```go
SourceVirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#source_virtual_machine_id VirtualMachineRestorePointCollection#source_virtual_machine_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#id VirtualMachineRestorePointCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#tags VirtualMachineRestorePointCollection#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionConfig.property.timeouts"></a>

```go
Timeouts VirtualMachineRestorePointCollectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts">VirtualMachineRestorePointCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#timeouts VirtualMachineRestorePointCollection#timeouts}

---

### VirtualMachineRestorePointCollectionTimeouts <a name="VirtualMachineRestorePointCollectionTimeouts" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

&virtualmachinerestorepointcollection.VirtualMachineRestorePointCollectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#create VirtualMachineRestorePointCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#delete VirtualMachineRestorePointCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#read VirtualMachineRestorePointCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#update VirtualMachineRestorePointCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#create VirtualMachineRestorePointCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#delete VirtualMachineRestorePointCollection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#read VirtualMachineRestorePointCollection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/virtual_machine_restore_point_collection#update VirtualMachineRestorePointCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRestorePointCollectionTimeoutsOutputReference <a name="VirtualMachineRestorePointCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualmachinerestorepointcollection"

virtualmachinerestorepointcollection.NewVirtualMachineRestorePointCollectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineRestorePointCollectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRestorePointCollection.VirtualMachineRestorePointCollectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



