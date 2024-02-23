# `dataAzurermDatabricksWorkspacePrivateEndpointConnection` Submodule <a name="`dataAzurermDatabricksWorkspacePrivateEndpointConnection` Submodule" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnection <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection azurerm_databricks_workspace_private_endpoint_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.NewDataAzurermDatabricksWorkspacePrivateEndpointConnection(scope Construct, id *string, config DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig) DataAzurermDatabricksWorkspacePrivateEndpointConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDatabricksWorkspacePrivateEndpointConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermDatabricksWorkspacePrivateEndpointConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermDatabricksWorkspacePrivateEndpointConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermDatabricksWorkspacePrivateEndpointConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDatabricksWorkspacePrivateEndpointConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.connections"></a>

```go
func Connections() DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeouts"></a>

```go
func Timeouts() DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointIdInput"></a>

```go
func PrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

&dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrivateEndpointId: *string,
	WorkspaceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.privateEndpointId"></a>

```go
PrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#timeouts DataAzurermDatabricksWorkspacePrivateEndpointConnection#timeouts}

---

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

&dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections {

}
```


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

&dataazurermdatabricksworkspaceprivateendpointconnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.NewDataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get"></a>

```go
func Get(index *f64) DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.NewDataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.actionRequired">ActionRequired</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.workspacePrivateEndpointId">WorkspacePrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionRequired`<sup>Required</sup> <a name="ActionRequired" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.actionRequired"></a>

```go
func ActionRequired() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `WorkspacePrivateEndpointId`<sup>Required</sup> <a name="WorkspacePrivateEndpointId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.workspacePrivateEndpointId"></a>

```go
func WorkspacePrivateEndpointId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections</a>

---


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermdatabricksworkspaceprivateendpointconnection"

dataazurermdatabricksworkspaceprivateendpointconnection.NewDataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



