# `databoxEdgeDevice` Submodule <a name="`databoxEdgeDevice` Submodule" id="@cdktf/provider-azurerm.databoxEdgeDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataboxEdgeDevice <a name="DataboxEdgeDevice" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device azurerm_databox_edge_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.NewDataboxEdgeDevice(scope Construct, id *string, config DataboxEdgeDeviceConfig) DataboxEdgeDevice
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig">DataboxEdgeDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig">DataboxEdgeDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.putTimeouts"></a>

```go
func PutTimeouts(value DataboxEdgeDeviceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts">DataboxEdgeDeviceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataboxEdgeDevice resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.DataboxEdgeDevice_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.DataboxEdgeDevice_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.DataboxEdgeDevice_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.DataboxEdgeDevice_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataboxEdgeDevice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataboxEdgeDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataboxEdgeDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataboxEdgeDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.deviceProperties">DeviceProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList">DataboxEdgeDeviceDevicePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference">DataboxEdgeDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeviceProperties`<sup>Required</sup> <a name="DeviceProperties" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.deviceProperties"></a>

```go
func DeviceProperties() DataboxEdgeDeviceDevicePropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList">DataboxEdgeDeviceDevicePropertiesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.timeouts"></a>

```go
func Timeouts() DataboxEdgeDeviceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference">DataboxEdgeDeviceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDevice.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataboxEdgeDeviceConfig <a name="DataboxEdgeDeviceConfig" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

&databoxedgedevice.DataboxEdgeDeviceConfig {
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
	SkuName: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.databoxEdgeDevice.DataboxEdgeDeviceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#location DataboxEdgeDevice#location}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#name DataboxEdgeDevice#name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#resource_group_name DataboxEdgeDevice#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#sku_name DataboxEdgeDevice#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#id DataboxEdgeDevice#id}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#tags DataboxEdgeDevice#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts">DataboxEdgeDeviceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#location DataboxEdgeDevice#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#name DataboxEdgeDevice#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#resource_group_name DataboxEdgeDevice#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#sku_name DataboxEdgeDevice#sku_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#id DataboxEdgeDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#tags DataboxEdgeDevice#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceConfig.property.timeouts"></a>

```go
Timeouts DataboxEdgeDeviceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts">DataboxEdgeDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#timeouts DataboxEdgeDevice#timeouts}

---

### DataboxEdgeDeviceDeviceProperties <a name="DataboxEdgeDeviceDeviceProperties" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDeviceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDeviceProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

&databoxedgedevice.DataboxEdgeDeviceDeviceProperties {

}
```


### DataboxEdgeDeviceTimeouts <a name="DataboxEdgeDeviceTimeouts" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

&databoxedgedevice.DataboxEdgeDeviceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#create DataboxEdgeDevice#create}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#delete DataboxEdgeDevice#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#read DataboxEdgeDevice#read}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#update DataboxEdgeDevice#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#create DataboxEdgeDevice#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#delete DataboxEdgeDevice#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#read DataboxEdgeDevice#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/databox_edge_device#update DataboxEdgeDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataboxEdgeDeviceDevicePropertiesList <a name="DataboxEdgeDeviceDevicePropertiesList" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.NewDataboxEdgeDeviceDevicePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataboxEdgeDeviceDevicePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.get"></a>

```go
func Get(index *f64) DataboxEdgeDeviceDevicePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataboxEdgeDeviceDevicePropertiesOutputReference <a name="DataboxEdgeDeviceDevicePropertiesOutputReference" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.NewDataboxEdgeDeviceDevicePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataboxEdgeDeviceDevicePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.configuredRoleTypes">ConfiguredRoleTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.culture">Culture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.hcsVersion">HcsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.softwareVersion">SoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDeviceProperties">DataboxEdgeDeviceDeviceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `ConfiguredRoleTypes`<sup>Required</sup> <a name="ConfiguredRoleTypes" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.configuredRoleTypes"></a>

```go
func ConfiguredRoleTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Culture`<sup>Required</sup> <a name="Culture" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.culture"></a>

```go
func Culture() *string
```

- *Type:* *string

---

##### `HcsVersion`<sup>Required</sup> <a name="HcsVersion" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.hcsVersion"></a>

```go
func HcsVersion() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.softwareVersion"></a>

```go
func SoftwareVersion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDevicePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeDeviceDeviceProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceDeviceProperties">DataboxEdgeDeviceDeviceProperties</a>

---


### DataboxEdgeDeviceTimeoutsOutputReference <a name="DataboxEdgeDeviceTimeoutsOutputReference" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/databoxedgedevice"

databoxedgedevice.NewDataboxEdgeDeviceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataboxEdgeDeviceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeDevice.DataboxEdgeDeviceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



