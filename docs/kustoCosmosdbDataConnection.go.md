# `kustoCosmosdbDataConnection` Submodule <a name="`kustoCosmosdbDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoCosmosdbDataConnection <a name="KustoCosmosdbDataConnection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection azurerm_kusto_cosmosdb_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

kustocosmosdbdataconnection.NewKustoCosmosdbDataConnection(scope Construct, id *string, config KustoCosmosdbDataConnectionConfig) KustoCosmosdbDataConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig">KustoCosmosdbDataConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig">KustoCosmosdbDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetMappingRuleName">ResetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetRetrievalStartDate">ResetRetrievalStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts"></a>

```go
func PutTimeouts(value KustoCosmosdbDataConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetMappingRuleName` <a name="ResetMappingRuleName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetMappingRuleName"></a>

```go
func ResetMappingRuleName()
```

##### `ResetRetrievalStartDate` <a name="ResetRetrievalStartDate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetRetrievalStartDate"></a>

```go
func ResetRetrievalStartDate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KustoCosmosdbDataConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

kustocosmosdbdataconnection.KustoCosmosdbDataConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

kustocosmosdbdataconnection.KustoCosmosdbDataConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

kustocosmosdbdataconnection.KustoCosmosdbDataConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

kustocosmosdbdataconnection.KustoCosmosdbDataConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KustoCosmosdbDataConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KustoCosmosdbDataConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KustoCosmosdbDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KustoCosmosdbDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference">KustoCosmosdbDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerIdInput">CosmosdbContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseIdInput">KustoDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityIdInput">ManagedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleNameInput">MappingRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDateInput">RetrievalStartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerId">CosmosdbContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityId">ManagedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDate">RetrievalStartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeouts"></a>

```go
func Timeouts() KustoCosmosdbDataConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference">KustoCosmosdbDataConnectionTimeoutsOutputReference</a>

---

##### `CosmosdbContainerIdInput`<sup>Optional</sup> <a name="CosmosdbContainerIdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerIdInput"></a>

```go
func CosmosdbContainerIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KustoDatabaseIdInput`<sup>Optional</sup> <a name="KustoDatabaseIdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseIdInput"></a>

```go
func KustoDatabaseIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedIdentityIdInput`<sup>Optional</sup> <a name="ManagedIdentityIdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityIdInput"></a>

```go
func ManagedIdentityIdInput() *string
```

- *Type:* *string

---

##### `MappingRuleNameInput`<sup>Optional</sup> <a name="MappingRuleNameInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleNameInput"></a>

```go
func MappingRuleNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetrievalStartDateInput`<sup>Optional</sup> <a name="RetrievalStartDateInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDateInput"></a>

```go
func RetrievalStartDateInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CosmosdbContainerId`<sup>Required</sup> <a name="CosmosdbContainerId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerId"></a>

```go
func CosmosdbContainerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseId"></a>

```go
func KustoDatabaseId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityId"></a>

```go
func ManagedIdentityId() *string
```

- *Type:* *string

---

##### `MappingRuleName`<sup>Required</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleName"></a>

```go
func MappingRuleName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetrievalStartDate`<sup>Required</sup> <a name="RetrievalStartDate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDate"></a>

```go
func RetrievalStartDate() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoCosmosdbDataConnectionConfig <a name="KustoCosmosdbDataConnectionConfig" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

&kustocosmosdbdataconnection.KustoCosmosdbDataConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CosmosdbContainerId: *string,
	KustoDatabaseId: *string,
	Location: *string,
	ManagedIdentityId: *string,
	Name: *string,
	TableName: *string,
	Id: *string,
	MappingRuleName: *string,
	RetrievalStartDate: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.cosmosdbContainerId">CosmosdbContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.managedIdentityId">ManagedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.retrievalStartDate">RetrievalStartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CosmosdbContainerId`<sup>Required</sup> <a name="CosmosdbContainerId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.cosmosdbContainerId"></a>

```go
CosmosdbContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}.

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.kustoDatabaseId"></a>

```go
KustoDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}.

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.managedIdentityId"></a>

```go
ManagedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingRuleName`<sup>Optional</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.mappingRuleName"></a>

```go
MappingRuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}.

---

##### `RetrievalStartDate`<sup>Optional</sup> <a name="RetrievalStartDate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.retrievalStartDate"></a>

```go
RetrievalStartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.timeouts"></a>

```go
Timeouts KustoCosmosdbDataConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#timeouts KustoCosmosdbDataConnection#timeouts}

---

### KustoCosmosdbDataConnectionTimeouts <a name="KustoCosmosdbDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

&kustocosmosdbdataconnection.KustoCosmosdbDataConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoCosmosdbDataConnectionTimeoutsOutputReference <a name="KustoCosmosdbDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/kustocosmosdbdataconnection"

kustocosmosdbdataconnection.NewKustoCosmosdbDataConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoCosmosdbDataConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



