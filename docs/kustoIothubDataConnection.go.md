# `kustoIothubDataConnection` Submodule <a name="`kustoIothubDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoIothubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoIothubDataConnection <a name="KustoIothubDataConnection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection azurerm_kusto_iothub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

kustoiothubdataconnection.NewKustoIothubDataConnection(scope Construct, id *string, config KustoIothubDataConnectionConfig) KustoIothubDataConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig">KustoIothubDataConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig">KustoIothubDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType">ResetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties">ResetEventSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName">ResetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts"></a>

```go
func PutTimeouts(value KustoIothubDataConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---

##### `ResetDatabaseRoutingType` <a name="ResetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType"></a>

```go
func ResetDatabaseRoutingType()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetEventSystemProperties` <a name="ResetEventSystemProperties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties"></a>

```go
func ResetEventSystemProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetMappingRuleName` <a name="ResetMappingRuleName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName"></a>

```go
func ResetMappingRuleName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KustoIothubDataConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

kustoiothubdataconnection.KustoIothubDataConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

kustoiothubdataconnection.KustoIothubDataConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

kustoiothubdataconnection.KustoIothubDataConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

kustoiothubdataconnection.KustoIothubDataConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KustoIothubDataConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KustoIothubDataConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KustoIothubDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KustoIothubDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput">ConsumerGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput">DatabaseRoutingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput">EventSystemPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput">IothubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput">MappingRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType">DatabaseRoutingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties">EventSystemProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId">IothubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts"></a>

```go
func Timeouts() KustoIothubDataConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConsumerGroupInput`<sup>Optional</sup> <a name="ConsumerGroupInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput"></a>

```go
func ConsumerGroupInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DatabaseRoutingTypeInput`<sup>Optional</sup> <a name="DatabaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput"></a>

```go
func DatabaseRoutingTypeInput() *string
```

- *Type:* *string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `EventSystemPropertiesInput`<sup>Optional</sup> <a name="EventSystemPropertiesInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput"></a>

```go
func EventSystemPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput"></a>

```go
func IothubIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MappingRuleNameInput`<sup>Optional</sup> <a name="MappingRuleNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput"></a>

```go
func MappingRuleNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput"></a>

```go
func SharedAccessPolicyNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup"></a>

```go
func ConsumerGroup() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseRoutingType`<sup>Required</sup> <a name="DatabaseRoutingType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType"></a>

```go
func DatabaseRoutingType() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `EventSystemProperties`<sup>Required</sup> <a name="EventSystemProperties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties"></a>

```go
func EventSystemProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId"></a>

```go
func IothubId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MappingRuleName`<sup>Required</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName"></a>

```go
func MappingRuleName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName"></a>

```go
func SharedAccessPolicyName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoIothubDataConnectionConfig <a name="KustoIothubDataConnectionConfig" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

&kustoiothubdataconnection.KustoIothubDataConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	ConsumerGroup: *string,
	DatabaseName: *string,
	IothubId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SharedAccessPolicyName: *string,
	DatabaseRoutingType: *string,
	DataFormat: *string,
	EventSystemProperties: *[]*string,
	Id: *string,
	MappingRuleName: *string,
	TableName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId">IothubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType">DatabaseRoutingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties">EventSystemProperties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}.

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup"></a>

```go
ConsumerGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}.

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId"></a>

```go
IothubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}.

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName"></a>

```go
SharedAccessPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}.

---

##### `DatabaseRoutingType`<sup>Optional</sup> <a name="DatabaseRoutingType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType"></a>

```go
DatabaseRoutingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}.

---

##### `EventSystemProperties`<sup>Optional</sup> <a name="EventSystemProperties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties"></a>

```go
EventSystemProperties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingRuleName`<sup>Optional</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName"></a>

```go
MappingRuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts"></a>

```go
Timeouts KustoIothubDataConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#timeouts KustoIothubDataConnection#timeouts}

---

### KustoIothubDataConnectionTimeouts <a name="KustoIothubDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

&kustoiothubdataconnection.KustoIothubDataConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoIothubDataConnectionTimeoutsOutputReference <a name="KustoIothubDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoiothubdataconnection"

kustoiothubdataconnection.NewKustoIothubDataConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoIothubDataConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



