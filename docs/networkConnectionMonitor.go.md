# `networkConnectionMonitor` Submodule <a name="`networkConnectionMonitor` Submodule" id="@cdktf/provider-azurerm.networkConnectionMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectionMonitor <a name="NetworkConnectionMonitor" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor azurerm_network_connection_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitor(scope Construct, id *string, config NetworkConnectionMonitorConfig) NetworkConnectionMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig">NetworkConnectionMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig">NetworkConnectionMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration">PutTestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup">PutTestGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOutputWorkspaceResourceIds">ResetOutputWorkspaceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint"></a>

```go
func PutEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTestConfiguration` <a name="PutTestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration"></a>

```go
func PutTestConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTestGroup` <a name="PutTestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup"></a>

```go
func PutTestGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTestGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectionMonitorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetOutputWorkspaceResourceIds` <a name="ResetOutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetOutputWorkspaceResourceIds"></a>

```go
func ResetOutputWorkspaceResourceIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectionMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NetworkConnectionMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NetworkConnectionMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NetworkConnectionMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NetworkConnectionMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkConnectionMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectionMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectionMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectionMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList">NetworkConnectionMonitorEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfiguration">TestConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList">NetworkConnectionMonitorTestConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroup">TestGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList">NetworkConnectionMonitorTestGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference">NetworkConnectionMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpointInput">EndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherIdInput">NetworkWatcherIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIdsInput">OutputWorkspaceResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfigurationInput">TestConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroupInput">TestGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherId">NetworkWatcherId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIds">OutputWorkspaceResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpoint"></a>

```go
func Endpoint() NetworkConnectionMonitorEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList">NetworkConnectionMonitorEndpointList</a>

---

##### `TestConfiguration`<sup>Required</sup> <a name="TestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfiguration"></a>

```go
func TestConfiguration() NetworkConnectionMonitorTestConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList">NetworkConnectionMonitorTestConfigurationList</a>

---

##### `TestGroup`<sup>Required</sup> <a name="TestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroup"></a>

```go
func TestGroup() NetworkConnectionMonitorTestGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList">NetworkConnectionMonitorTestGroupList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeouts"></a>

```go
func Timeouts() NetworkConnectionMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference">NetworkConnectionMonitorTimeoutsOutputReference</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.endpointInput"></a>

```go
func EndpointInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkWatcherIdInput`<sup>Optional</sup> <a name="NetworkWatcherIdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherIdInput"></a>

```go
func NetworkWatcherIdInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `OutputWorkspaceResourceIdsInput`<sup>Optional</sup> <a name="OutputWorkspaceResourceIdsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIdsInput"></a>

```go
func OutputWorkspaceResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TestConfigurationInput`<sup>Optional</sup> <a name="TestConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testConfigurationInput"></a>

```go
func TestConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TestGroupInput`<sup>Optional</sup> <a name="TestGroupInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.testGroupInput"></a>

```go
func TestGroupInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.networkWatcherId"></a>

```go
func NetworkWatcherId() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `OutputWorkspaceResourceIds`<sup>Required</sup> <a name="OutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.outputWorkspaceResourceIds"></a>

```go
func OutputWorkspaceResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectionMonitorConfig <a name="NetworkConnectionMonitorConfig" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Endpoint: interface{},
	Location: *string,
	Name: *string,
	NetworkWatcherId: *string,
	TestConfiguration: interface{},
	TestGroup: interface{},
	Id: *string,
	Notes: *string,
	OutputWorkspaceResourceIds: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.networkConnectionMonitor.NetworkConnectionMonitorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.endpoint">Endpoint</a></code> | <code>interface{}</code> | endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.networkWatcherId">NetworkWatcherId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testConfiguration">TestConfiguration</a></code> | <code>interface{}</code> | test_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testGroup">TestGroup</a></code> | <code>interface{}</code> | test_group block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.outputWorkspaceResourceIds">OutputWorkspaceResourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.endpoint"></a>

```go
Endpoint interface{}
```

- *Type:* interface{}

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#endpoint NetworkConnectionMonitor#endpoint}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#location NetworkConnectionMonitor#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.networkWatcherId"></a>

```go
NetworkWatcherId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}.

---

##### `TestConfiguration`<sup>Required</sup> <a name="TestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testConfiguration"></a>

```go
TestConfiguration interface{}
```

- *Type:* interface{}

test_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#test_configuration NetworkConnectionMonitor#test_configuration}

---

##### `TestGroup`<sup>Required</sup> <a name="TestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.testGroup"></a>

```go
TestGroup interface{}
```

- *Type:* interface{}

test_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#test_group NetworkConnectionMonitor#test_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#id NetworkConnectionMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#notes NetworkConnectionMonitor#notes}.

---

##### `OutputWorkspaceResourceIds`<sup>Optional</sup> <a name="OutputWorkspaceResourceIds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.outputWorkspaceResourceIds"></a>

```go
OutputWorkspaceResourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#tags NetworkConnectionMonitor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectionMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts">NetworkConnectionMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#timeouts NetworkConnectionMonitor#timeouts}

---

### NetworkConnectionMonitorEndpoint <a name="NetworkConnectionMonitorEndpoint" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorEndpoint {
	Name: *string,
	Address: *string,
	CoverageLevel: *string,
	ExcludedIpAddresses: *[]*string,
	Filter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter,
	IncludedIpAddresses: *[]*string,
	TargetResourceId: *string,
	TargetResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.coverageLevel">CoverageLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.excludedIpAddresses">ExcludedIpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.includedIpAddresses">IncludedIpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}.

---

##### `CoverageLevel`<sup>Optional</sup> <a name="CoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.coverageLevel"></a>

```go
CoverageLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}.

---

##### `ExcludedIpAddresses`<sup>Optional</sup> <a name="ExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.excludedIpAddresses"></a>

```go
ExcludedIpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.filter"></a>

```go
Filter NetworkConnectionMonitorEndpointFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#filter NetworkConnectionMonitor#filter}

---

##### `IncludedIpAddresses`<sup>Optional</sup> <a name="IncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.includedIpAddresses"></a>

```go
IncludedIpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}.

---

##### `TargetResourceId`<sup>Optional</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}.

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpoint.property.targetResourceType"></a>

```go
TargetResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}.

---

### NetworkConnectionMonitorEndpointFilter <a name="NetworkConnectionMonitorEndpointFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorEndpointFilter {
	Item: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.item">Item</a></code> | <code>interface{}</code> | item block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}. |

---

##### `Item`<sup>Optional</sup> <a name="Item" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.item"></a>

```go
Item interface{}
```

- *Type:* interface{}

item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#item NetworkConnectionMonitor#item}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}.

---

### NetworkConnectionMonitorEndpointFilterItem <a name="NetworkConnectionMonitorEndpointFilterItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorEndpointFilterItem {
	Address: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#address NetworkConnectionMonitor#address}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItem.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#type NetworkConnectionMonitor#type}.

---

### NetworkConnectionMonitorTestConfiguration <a name="NetworkConnectionMonitorTestConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestConfiguration {
	Name: *string,
	Protocol: *string,
	HttpConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration,
	IcmpConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration,
	PreferredIpVersion: *string,
	SuccessThreshold: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold,
	TcpConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration,
	TestFrequencyInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | http_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.icmpConfiguration">IcmpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | icmp_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.preferredIpVersion">PreferredIpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.successThreshold">SuccessThreshold</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | success_threshold block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.tcpConfiguration">TcpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | tcp_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.testFrequencyInSeconds">TestFrequencyInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}.

---

##### `HttpConfiguration`<sup>Optional</sup> <a name="HttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.httpConfiguration"></a>

```go
HttpConfiguration NetworkConnectionMonitorTestConfigurationHttpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

http_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#http_configuration NetworkConnectionMonitor#http_configuration}

---

##### `IcmpConfiguration`<sup>Optional</sup> <a name="IcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.icmpConfiguration"></a>

```go
IcmpConfiguration NetworkConnectionMonitorTestConfigurationIcmpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

icmp_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#icmp_configuration NetworkConnectionMonitor#icmp_configuration}

---

##### `PreferredIpVersion`<sup>Optional</sup> <a name="PreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.preferredIpVersion"></a>

```go
PreferredIpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}.

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.successThreshold"></a>

```go
SuccessThreshold NetworkConnectionMonitorTestConfigurationSuccessThreshold
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

success_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#success_threshold NetworkConnectionMonitor#success_threshold}

---

##### `TcpConfiguration`<sup>Optional</sup> <a name="TcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.tcpConfiguration"></a>

```go
TcpConfiguration NetworkConnectionMonitorTestConfigurationTcpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

tcp_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#tcp_configuration NetworkConnectionMonitor#tcp_configuration}

---

##### `TestFrequencyInSeconds`<sup>Optional</sup> <a name="TestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfiguration.property.testFrequencyInSeconds"></a>

```go
TestFrequencyInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}.

---

### NetworkConnectionMonitorTestConfigurationHttpConfiguration <a name="NetworkConnectionMonitorTestConfigurationHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration {
	Method: *string,
	Path: *string,
	Port: *f64,
	PreferHttps: interface{},
	RequestHeader: interface{},
	ValidStatusCodeRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.preferHttps">PreferHttps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.validStatusCodeRanges">ValidStatusCodeRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#method NetworkConnectionMonitor#method}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#path NetworkConnectionMonitor#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}.

---

##### `PreferHttps`<sup>Optional</sup> <a name="PreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.preferHttps"></a>

```go
PreferHttps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}.

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#request_header NetworkConnectionMonitor#request_header}

---

##### `ValidStatusCodeRanges`<sup>Optional</sup> <a name="ValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration.property.validStatusCodeRanges"></a>

```go
ValidStatusCodeRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}.

---

### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#value NetworkConnectionMonitor#value}.

---

### NetworkConnectionMonitorTestConfigurationIcmpConfiguration <a name="NetworkConnectionMonitorTestConfigurationIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration {
	TraceRouteEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}. |

---

##### `TraceRouteEnabled`<sup>Optional</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration.property.traceRouteEnabled"></a>

```go
TraceRouteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}.

---

### NetworkConnectionMonitorTestConfigurationSuccessThreshold <a name="NetworkConnectionMonitorTestConfigurationSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold {
	ChecksFailedPercent: *f64,
	RoundTripTimeMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.checksFailedPercent">ChecksFailedPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.roundTripTimeMs">RoundTripTimeMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}. |

---

##### `ChecksFailedPercent`<sup>Optional</sup> <a name="ChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.checksFailedPercent"></a>

```go
ChecksFailedPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}.

---

##### `RoundTripTimeMs`<sup>Optional</sup> <a name="RoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold.property.roundTripTimeMs"></a>

```go
RoundTripTimeMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}.

---

### NetworkConnectionMonitorTestConfigurationTcpConfiguration <a name="NetworkConnectionMonitorTestConfigurationTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration {
	Port: *f64,
	DestinationPortBehavior: *string,
	TraceRouteEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.destinationPortBehavior">DestinationPortBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#port NetworkConnectionMonitor#port}.

---

##### `DestinationPortBehavior`<sup>Optional</sup> <a name="DestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.destinationPortBehavior"></a>

```go
DestinationPortBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}.

---

##### `TraceRouteEnabled`<sup>Optional</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration.property.traceRouteEnabled"></a>

```go
TraceRouteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}.

---

### NetworkConnectionMonitorTestGroup <a name="NetworkConnectionMonitorTestGroup" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTestGroup {
	DestinationEndpoints: *[]*string,
	Name: *string,
	SourceEndpoints: *[]*string,
	TestConfigurationNames: *[]*string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.destinationEndpoints">DestinationEndpoints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.sourceEndpoints">SourceEndpoints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.testConfigurationNames">TestConfigurationNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}. |

---

##### `DestinationEndpoints`<sup>Required</sup> <a name="DestinationEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.destinationEndpoints"></a>

```go
DestinationEndpoints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#name NetworkConnectionMonitor#name}.

---

##### `SourceEndpoints`<sup>Required</sup> <a name="SourceEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.sourceEndpoints"></a>

```go
SourceEndpoints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}.

---

##### `TestConfigurationNames`<sup>Required</sup> <a name="TestConfigurationNames" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.testConfigurationNames"></a>

```go
TestConfigurationNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroup.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}.

---

### NetworkConnectionMonitorTimeouts <a name="NetworkConnectionMonitorTimeouts" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

&networkconnectionmonitor.NetworkConnectionMonitorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#create NetworkConnectionMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#delete NetworkConnectionMonitor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#read NetworkConnectionMonitor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/network_connection_monitor#update NetworkConnectionMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectionMonitorEndpointFilterItemList <a name="NetworkConnectionMonitorEndpointFilterItemList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorEndpointFilterItemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectionMonitorEndpointFilterItemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get"></a>

```go
func Get(index *f64) NetworkConnectionMonitorEndpointFilterItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorEndpointFilterItemOutputReference <a name="NetworkConnectionMonitorEndpointFilterItemOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorEndpointFilterItemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectionMonitorEndpointFilterItemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorEndpointFilterOutputReference <a name="NetworkConnectionMonitorEndpointFilterOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorEndpointFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectionMonitorEndpointFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem">PutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetItem">ResetItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItem` <a name="PutItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem"></a>

```go
func PutItem(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.putItem.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItem` <a name="ResetItem" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetItem"></a>

```go
func ResetItem()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.item">Item</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList">NetworkConnectionMonitorEndpointFilterItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.itemInput">ItemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.item"></a>

```go
func Item() NetworkConnectionMonitorEndpointFilterItemList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterItemList">NetworkConnectionMonitorEndpointFilterItemList</a>

---

##### `ItemInput`<sup>Optional</sup> <a name="ItemInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.itemInput"></a>

```go
func ItemInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectionMonitorEndpointFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---


### NetworkConnectionMonitorEndpointList <a name="NetworkConnectionMonitorEndpointList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectionMonitorEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get"></a>

```go
func Get(index *f64) NetworkConnectionMonitorEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorEndpointOutputReference <a name="NetworkConnectionMonitorEndpointOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectionMonitorEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetCoverageLevel">ResetCoverageLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetExcludedIpAddresses">ResetExcludedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetIncludedIpAddresses">ResetIncludedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceId">ResetTargetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter"></a>

```go
func PutFilter(value NetworkConnectionMonitorEndpointFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetCoverageLevel` <a name="ResetCoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetCoverageLevel"></a>

```go
func ResetCoverageLevel()
```

##### `ResetExcludedIpAddresses` <a name="ResetExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetExcludedIpAddresses"></a>

```go
func ResetExcludedIpAddresses()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetIncludedIpAddresses` <a name="ResetIncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetIncludedIpAddresses"></a>

```go
func ResetIncludedIpAddresses()
```

##### `ResetTargetResourceId` <a name="ResetTargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceId"></a>

```go
func ResetTargetResourceId()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.resetTargetResourceType"></a>

```go
func ResetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference">NetworkConnectionMonitorEndpointFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevelInput">CoverageLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddressesInput">ExcludedIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddressesInput">IncludedIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevel">CoverageLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddresses">ExcludedIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddresses">IncludedIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filter"></a>

```go
func Filter() NetworkConnectionMonitorEndpointFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilterOutputReference">NetworkConnectionMonitorEndpointFilterOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `CoverageLevelInput`<sup>Optional</sup> <a name="CoverageLevelInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevelInput"></a>

```go
func CoverageLevelInput() *string
```

- *Type:* *string

---

##### `ExcludedIpAddressesInput`<sup>Optional</sup> <a name="ExcludedIpAddressesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddressesInput"></a>

```go
func ExcludedIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.filterInput"></a>

```go
func FilterInput() NetworkConnectionMonitorEndpointFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointFilter">NetworkConnectionMonitorEndpointFilter</a>

---

##### `IncludedIpAddressesInput`<sup>Optional</sup> <a name="IncludedIpAddressesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddressesInput"></a>

```go
func IncludedIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceTypeInput"></a>

```go
func TargetResourceTypeInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CoverageLevel`<sup>Required</sup> <a name="CoverageLevel" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.coverageLevel"></a>

```go
func CoverageLevel() *string
```

- *Type:* *string

---

##### `ExcludedIpAddresses`<sup>Required</sup> <a name="ExcludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.excludedIpAddresses"></a>

```go
func ExcludedIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedIpAddresses`<sup>Required</sup> <a name="IncludedIpAddresses" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.includedIpAddresses"></a>

```go
func IncludedIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPreferHttps">ResetPreferHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetValidStatusCodeRanges">ResetValidStatusCodeRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferHttps` <a name="ResetPreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetPreferHttps"></a>

```go
func ResetPreferHttps()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetValidStatusCodeRanges` <a name="ResetValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.resetValidStatusCodeRanges"></a>

```go
func ResetValidStatusCodeRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttpsInput">PreferHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRangesInput">ValidStatusCodeRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttps">PreferHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRanges">ValidStatusCodeRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeader"></a>

```go
func RequestHeader() NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList">NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList</a>

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferHttpsInput`<sup>Optional</sup> <a name="PreferHttpsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttpsInput"></a>

```go
func PreferHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `ValidStatusCodeRangesInput`<sup>Optional</sup> <a name="ValidStatusCodeRangesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRangesInput"></a>

```go
func ValidStatusCodeRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferHttps`<sup>Required</sup> <a name="PreferHttps" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.preferHttps"></a>

```go
func PreferHttps() interface{}
```

- *Type:* interface{}

---

##### `ValidStatusCodeRanges`<sup>Required</sup> <a name="ValidStatusCodeRanges" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.validStatusCodeRanges"></a>

```go
func ValidStatusCodeRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectionMonitorTestConfigurationHttpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get"></a>

```go
func Get(index *f64) NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference <a name="NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resetTraceRouteEnabled">ResetTraceRouteEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTraceRouteEnabled` <a name="ResetTraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.resetTraceRouteEnabled"></a>

```go
func ResetTraceRouteEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabledInput">TraceRouteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TraceRouteEnabledInput`<sup>Optional</sup> <a name="TraceRouteEnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabledInput"></a>

```go
func TraceRouteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TraceRouteEnabled`<sup>Required</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.traceRouteEnabled"></a>

```go
func TraceRouteEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectionMonitorTestConfigurationIcmpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---


### NetworkConnectionMonitorTestConfigurationList <a name="NetworkConnectionMonitorTestConfigurationList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectionMonitorTestConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get"></a>

```go
func Get(index *f64) NetworkConnectionMonitorTestConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTestConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectionMonitorTestConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration">PutHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration">PutIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold">PutSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration">PutTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetHttpConfiguration">ResetHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetIcmpConfiguration">ResetIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetPreferredIpVersion">ResetPreferredIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTcpConfiguration">ResetTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTestFrequencyInSeconds">ResetTestFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpConfiguration` <a name="PutHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration"></a>

```go
func PutHttpConfiguration(value NetworkConnectionMonitorTestConfigurationHttpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putHttpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---

##### `PutIcmpConfiguration` <a name="PutIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration"></a>

```go
func PutIcmpConfiguration(value NetworkConnectionMonitorTestConfigurationIcmpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putIcmpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---

##### `PutSuccessThreshold` <a name="PutSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold"></a>

```go
func PutSuccessThreshold(value NetworkConnectionMonitorTestConfigurationSuccessThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putSuccessThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---

##### `PutTcpConfiguration` <a name="PutTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration"></a>

```go
func PutTcpConfiguration(value NetworkConnectionMonitorTestConfigurationTcpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.putTcpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---

##### `ResetHttpConfiguration` <a name="ResetHttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetHttpConfiguration"></a>

```go
func ResetHttpConfiguration()
```

##### `ResetIcmpConfiguration` <a name="ResetIcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetIcmpConfiguration"></a>

```go
func ResetIcmpConfiguration()
```

##### `ResetPreferredIpVersion` <a name="ResetPreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetPreferredIpVersion"></a>

```go
func ResetPreferredIpVersion()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTcpConfiguration` <a name="ResetTcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTcpConfiguration"></a>

```go
func ResetTcpConfiguration()
```

##### `ResetTestFrequencyInSeconds` <a name="ResetTestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.resetTestFrequencyInSeconds"></a>

```go
func ResetTestFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfiguration">IcmpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference">NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfiguration">TcpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfigurationInput">HttpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfigurationInput">IcmpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersionInput">PreferredIpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfigurationInput">TcpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSecondsInput">TestFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersion">PreferredIpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSeconds">TestFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpConfiguration`<sup>Required</sup> <a name="HttpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfiguration"></a>

```go
func HttpConfiguration() NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference</a>

---

##### `IcmpConfiguration`<sup>Required</sup> <a name="IcmpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfiguration"></a>

```go
func IcmpConfiguration() NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference</a>

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference">NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference</a>

---

##### `TcpConfiguration`<sup>Required</sup> <a name="TcpConfiguration" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfiguration"></a>

```go
func TcpConfiguration() NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference">NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference</a>

---

##### `HttpConfigurationInput`<sup>Optional</sup> <a name="HttpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.httpConfigurationInput"></a>

```go
func HttpConfigurationInput() NetworkConnectionMonitorTestConfigurationHttpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationHttpConfiguration">NetworkConnectionMonitorTestConfigurationHttpConfiguration</a>

---

##### `IcmpConfigurationInput`<sup>Optional</sup> <a name="IcmpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.icmpConfigurationInput"></a>

```go
func IcmpConfigurationInput() NetworkConnectionMonitorTestConfigurationIcmpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationIcmpConfiguration">NetworkConnectionMonitorTestConfigurationIcmpConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PreferredIpVersionInput`<sup>Optional</sup> <a name="PreferredIpVersionInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersionInput"></a>

```go
func PreferredIpVersionInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() NetworkConnectionMonitorTestConfigurationSuccessThreshold
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---

##### `TcpConfigurationInput`<sup>Optional</sup> <a name="TcpConfigurationInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.tcpConfigurationInput"></a>

```go
func TcpConfigurationInput() NetworkConnectionMonitorTestConfigurationTcpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---

##### `TestFrequencyInSecondsInput`<sup>Optional</sup> <a name="TestFrequencyInSecondsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSecondsInput"></a>

```go
func TestFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreferredIpVersion`<sup>Required</sup> <a name="PreferredIpVersion" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.preferredIpVersion"></a>

```go
func PreferredIpVersion() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TestFrequencyInSeconds`<sup>Required</sup> <a name="TestFrequencyInSeconds" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.testFrequencyInSeconds"></a>

```go
func TestFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference <a name="NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetChecksFailedPercent">ResetChecksFailedPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetRoundTripTimeMs">ResetRoundTripTimeMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChecksFailedPercent` <a name="ResetChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetChecksFailedPercent"></a>

```go
func ResetChecksFailedPercent()
```

##### `ResetRoundTripTimeMs` <a name="ResetRoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.resetRoundTripTimeMs"></a>

```go
func ResetRoundTripTimeMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercentInput">ChecksFailedPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMsInput">RoundTripTimeMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercent">ChecksFailedPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMs">RoundTripTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChecksFailedPercentInput`<sup>Optional</sup> <a name="ChecksFailedPercentInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercentInput"></a>

```go
func ChecksFailedPercentInput() *f64
```

- *Type:* *f64

---

##### `RoundTripTimeMsInput`<sup>Optional</sup> <a name="RoundTripTimeMsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMsInput"></a>

```go
func RoundTripTimeMsInput() *f64
```

- *Type:* *f64

---

##### `ChecksFailedPercent`<sup>Required</sup> <a name="ChecksFailedPercent" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.checksFailedPercent"></a>

```go
func ChecksFailedPercent() *f64
```

- *Type:* *f64

---

##### `RoundTripTimeMs`<sup>Required</sup> <a name="RoundTripTimeMs" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.roundTripTimeMs"></a>

```go
func RoundTripTimeMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectionMonitorTestConfigurationSuccessThreshold
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationSuccessThreshold">NetworkConnectionMonitorTestConfigurationSuccessThreshold</a>

---


### NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference <a name="NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetDestinationPortBehavior">ResetDestinationPortBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetTraceRouteEnabled">ResetTraceRouteEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPortBehavior` <a name="ResetDestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetDestinationPortBehavior"></a>

```go
func ResetDestinationPortBehavior()
```

##### `ResetTraceRouteEnabled` <a name="ResetTraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.resetTraceRouteEnabled"></a>

```go
func ResetTraceRouteEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehaviorInput">DestinationPortBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabledInput">TraceRouteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehavior">DestinationPortBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabled">TraceRouteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortBehaviorInput`<sup>Optional</sup> <a name="DestinationPortBehaviorInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehaviorInput"></a>

```go
func DestinationPortBehaviorInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TraceRouteEnabledInput`<sup>Optional</sup> <a name="TraceRouteEnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabledInput"></a>

```go
func TraceRouteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationPortBehavior`<sup>Required</sup> <a name="DestinationPortBehavior" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.destinationPortBehavior"></a>

```go
func DestinationPortBehavior() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TraceRouteEnabled`<sup>Required</sup> <a name="TraceRouteEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.traceRouteEnabled"></a>

```go
func TraceRouteEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectionMonitorTestConfigurationTcpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestConfigurationTcpConfiguration">NetworkConnectionMonitorTestConfigurationTcpConfiguration</a>

---


### NetworkConnectionMonitorTestGroupList <a name="NetworkConnectionMonitorTestGroupList" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectionMonitorTestGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get"></a>

```go
func Get(index *f64) NetworkConnectionMonitorTestGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTestGroupOutputReference <a name="NetworkConnectionMonitorTestGroupOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTestGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectionMonitorTestGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpointsInput">DestinationEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpointsInput">SourceEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNamesInput">TestConfigurationNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpoints">DestinationEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpoints">SourceEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNames">TestConfigurationNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationEndpointsInput`<sup>Optional</sup> <a name="DestinationEndpointsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpointsInput"></a>

```go
func DestinationEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceEndpointsInput`<sup>Optional</sup> <a name="SourceEndpointsInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpointsInput"></a>

```go
func SourceEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TestConfigurationNamesInput`<sup>Optional</sup> <a name="TestConfigurationNamesInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNamesInput"></a>

```go
func TestConfigurationNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationEndpoints`<sup>Required</sup> <a name="DestinationEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.destinationEndpoints"></a>

```go
func DestinationEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceEndpoints`<sup>Required</sup> <a name="SourceEndpoints" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.sourceEndpoints"></a>

```go
func SourceEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `TestConfigurationNames`<sup>Required</sup> <a name="TestConfigurationNames" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.testConfigurationNames"></a>

```go
func TestConfigurationNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTestGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectionMonitorTimeoutsOutputReference <a name="NetworkConnectionMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/networkconnectionmonitor"

networkconnectionmonitor.NewNetworkConnectionMonitorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectionMonitorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkConnectionMonitor.NetworkConnectionMonitorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



