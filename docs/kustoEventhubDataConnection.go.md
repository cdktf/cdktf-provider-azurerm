# `azurerm_kusto_eventhub_data_connection`

Refer to the Terraform Registory for docs: [`azurerm_kusto_eventhub_data_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection).

# `kustoEventhubDataConnection` Submodule <a name="`kustoEventhubDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoEventhubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoEventhubDataConnection <a name="KustoEventhubDataConnection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection azurerm_kusto_eventhub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

kustoeventhubdataconnection.NewKustoEventhubDataConnection(scope Construct, id *string, config KustoEventhubDataConnectionConfig) KustoEventhubDataConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig">KustoEventhubDataConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig">KustoEventhubDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDatabaseRoutingType">ResetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetEventSystemProperties">ResetEventSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetMappingRuleName">ResetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts"></a>

```go
func PutTimeouts(value KustoEventhubDataConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDatabaseRoutingType` <a name="ResetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDatabaseRoutingType"></a>

```go
func ResetDatabaseRoutingType()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetEventSystemProperties` <a name="ResetEventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetEventSystemProperties"></a>

```go
func ResetEventSystemProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetIdentityId"></a>

```go
func ResetIdentityId()
```

##### `ResetMappingRuleName` <a name="ResetMappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetMappingRuleName"></a>

```go
func ResetMappingRuleName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

kustoeventhubdataconnection.KustoEventhubDataConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

kustoeventhubdataconnection.KustoEventhubDataConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

kustoeventhubdataconnection.KustoEventhubDataConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference">KustoEventhubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroupInput">ConsumerGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingTypeInput">DatabaseRoutingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubIdInput">EventhubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemPropertiesInput">EventSystemPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityIdInput">IdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleNameInput">MappingRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingType">DatabaseRoutingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubId">EventhubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemProperties">EventSystemProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityId">IdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeouts"></a>

```go
func Timeouts() KustoEventhubDataConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference">KustoEventhubDataConnectionTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `ConsumerGroupInput`<sup>Optional</sup> <a name="ConsumerGroupInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroupInput"></a>

```go
func ConsumerGroupInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DatabaseRoutingTypeInput`<sup>Optional</sup> <a name="DatabaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingTypeInput"></a>

```go
func DatabaseRoutingTypeInput() *string
```

- *Type:* *string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `EventhubIdInput`<sup>Optional</sup> <a name="EventhubIdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubIdInput"></a>

```go
func EventhubIdInput() *string
```

- *Type:* *string

---

##### `EventSystemPropertiesInput`<sup>Optional</sup> <a name="EventSystemPropertiesInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemPropertiesInput"></a>

```go
func EventSystemPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityIdInput"></a>

```go
func IdentityIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MappingRuleNameInput`<sup>Optional</sup> <a name="MappingRuleNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleNameInput"></a>

```go
func MappingRuleNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroup"></a>

```go
func ConsumerGroup() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseRoutingType`<sup>Required</sup> <a name="DatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingType"></a>

```go
func DatabaseRoutingType() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `EventhubId`<sup>Required</sup> <a name="EventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubId"></a>

```go
func EventhubId() *string
```

- *Type:* *string

---

##### `EventSystemProperties`<sup>Required</sup> <a name="EventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemProperties"></a>

```go
func EventSystemProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityId"></a>

```go
func IdentityId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MappingRuleName`<sup>Required</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleName"></a>

```go
func MappingRuleName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoEventhubDataConnectionConfig <a name="KustoEventhubDataConnectionConfig" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

&kustoeventhubdataconnection.KustoEventhubDataConnectionConfig {
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
	EventhubId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Compression: *string,
	DatabaseRoutingType: *string,
	DataFormat: *string,
	EventSystemProperties: *[]*string,
	Id: *string,
	IdentityId: *string,
	MappingRuleName: *string,
	TableName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventhubId">EventhubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.compression">Compression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseRoutingType">DatabaseRoutingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventSystemProperties">EventSystemProperties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.identityId">IdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}.

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.consumerGroup"></a>

```go
ConsumerGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}.

---

##### `EventhubId`<sup>Required</sup> <a name="EventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventhubId"></a>

```go
EventhubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}.

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}.

---

##### `DatabaseRoutingType`<sup>Optional</sup> <a name="DatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseRoutingType"></a>

```go
DatabaseRoutingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}.

---

##### `EventSystemProperties`<sup>Optional</sup> <a name="EventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventSystemProperties"></a>

```go
EventSystemProperties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.identityId"></a>

```go
IdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}.

---

##### `MappingRuleName`<sup>Optional</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.mappingRuleName"></a>

```go
MappingRuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.timeouts"></a>

```go
Timeouts KustoEventhubDataConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#timeouts KustoEventhubDataConnection#timeouts}

---

### KustoEventhubDataConnectionTimeouts <a name="KustoEventhubDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

&kustoeventhubdataconnection.KustoEventhubDataConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoEventhubDataConnectionTimeoutsOutputReference <a name="KustoEventhubDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoeventhubdataconnection"

kustoeventhubdataconnection.NewKustoEventhubDataConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoEventhubDataConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



