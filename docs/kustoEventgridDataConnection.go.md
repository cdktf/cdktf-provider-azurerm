# `azurerm_kusto_eventgrid_data_connection`

Refer to the Terraform Registory for docs: [`azurerm_kusto_eventgrid_data_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection).

# `kustoEventgridDataConnection` Submodule <a name="`kustoEventgridDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoEventgridDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoEventgridDataConnection <a name="KustoEventgridDataConnection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection azurerm_kusto_eventgrid_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

kustoeventgriddataconnection.NewKustoEventgridDataConnection(scope Construct, id *string, config KustoEventgridDataConnectionConfig) KustoEventgridDataConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig">KustoEventgridDataConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig">KustoEventgridDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetBlobStorageEventType">ResetBlobStorageEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDatabaseRoutingType">ResetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetEventgridResourceId">ResetEventgridResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetManagedIdentityResourceId">ResetManagedIdentityResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetMappingRuleName">ResetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetSkipFirstRecord">ResetSkipFirstRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.putTimeouts"></a>

```go
func PutTimeouts(value KustoEventgridDataConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

---

##### `ResetBlobStorageEventType` <a name="ResetBlobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetBlobStorageEventType"></a>

```go
func ResetBlobStorageEventType()
```

##### `ResetDatabaseRoutingType` <a name="ResetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDatabaseRoutingType"></a>

```go
func ResetDatabaseRoutingType()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetEventgridResourceId` <a name="ResetEventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetEventgridResourceId"></a>

```go
func ResetEventgridResourceId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedIdentityResourceId` <a name="ResetManagedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetManagedIdentityResourceId"></a>

```go
func ResetManagedIdentityResourceId()
```

##### `ResetMappingRuleName` <a name="ResetMappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetMappingRuleName"></a>

```go
func ResetMappingRuleName()
```

##### `ResetSkipFirstRecord` <a name="ResetSkipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetSkipFirstRecord"></a>

```go
func ResetSkipFirstRecord()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

kustoeventgriddataconnection.KustoEventgridDataConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

kustoeventgriddataconnection.KustoEventgridDataConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

kustoeventgriddataconnection.KustoEventgridDataConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference">KustoEventgridDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventTypeInput">BlobStorageEventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingTypeInput">DatabaseRoutingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceIdInput">EventgridResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupNameInput">EventhubConsumerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubIdInput">EventhubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceIdInput">ManagedIdentityResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleNameInput">MappingRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecordInput">SkipFirstRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventType">BlobStorageEventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingType">DatabaseRoutingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceId">EventgridResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubId">EventhubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecord">SkipFirstRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeouts"></a>

```go
func Timeouts() KustoEventgridDataConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference">KustoEventgridDataConnectionTimeoutsOutputReference</a>

---

##### `BlobStorageEventTypeInput`<sup>Optional</sup> <a name="BlobStorageEventTypeInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventTypeInput"></a>

```go
func BlobStorageEventTypeInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DatabaseRoutingTypeInput`<sup>Optional</sup> <a name="DatabaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingTypeInput"></a>

```go
func DatabaseRoutingTypeInput() *string
```

- *Type:* *string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `EventgridResourceIdInput`<sup>Optional</sup> <a name="EventgridResourceIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceIdInput"></a>

```go
func EventgridResourceIdInput() *string
```

- *Type:* *string

---

##### `EventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="EventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupNameInput"></a>

```go
func EventhubConsumerGroupNameInput() *string
```

- *Type:* *string

---

##### `EventhubIdInput`<sup>Optional</sup> <a name="EventhubIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubIdInput"></a>

```go
func EventhubIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="ManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceIdInput"></a>

```go
func ManagedIdentityResourceIdInput() *string
```

- *Type:* *string

---

##### `MappingRuleNameInput`<sup>Optional</sup> <a name="MappingRuleNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleNameInput"></a>

```go
func MappingRuleNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkipFirstRecordInput`<sup>Optional</sup> <a name="SkipFirstRecordInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecordInput"></a>

```go
func SkipFirstRecordInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BlobStorageEventType`<sup>Required</sup> <a name="BlobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventType"></a>

```go
func BlobStorageEventType() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseRoutingType`<sup>Required</sup> <a name="DatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingType"></a>

```go
func DatabaseRoutingType() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `EventgridResourceId`<sup>Required</sup> <a name="EventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceId"></a>

```go
func EventgridResourceId() *string
```

- *Type:* *string

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupName"></a>

```go
func EventhubConsumerGroupName() *string
```

- *Type:* *string

---

##### `EventhubId`<sup>Required</sup> <a name="EventhubId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubId"></a>

```go
func EventhubId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceId"></a>

```go
func ManagedIdentityResourceId() *string
```

- *Type:* *string

---

##### `MappingRuleName`<sup>Required</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleName"></a>

```go
func MappingRuleName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkipFirstRecord`<sup>Required</sup> <a name="SkipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecord"></a>

```go
func SkipFirstRecord() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoEventgridDataConnectionConfig <a name="KustoEventgridDataConnectionConfig" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

&kustoeventgriddataconnection.KustoEventgridDataConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	DatabaseName: *string,
	EventhubConsumerGroupName: *string,
	EventhubId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	StorageAccountId: *string,
	BlobStorageEventType: *string,
	DatabaseRoutingType: *string,
	DataFormat: *string,
	EventgridResourceId: *string,
	Id: *string,
	ManagedIdentityResourceId: *string,
	MappingRuleName: *string,
	SkipFirstRecord: interface{},
	TableName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#cluster_name KustoEventgridDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#database_name KustoEventgridDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubId">EventhubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#eventhub_id KustoEventgridDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#location KustoEventgridDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#name KustoEventgridDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#resource_group_name KustoEventgridDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#storage_account_id KustoEventgridDataConnection#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.blobStorageEventType">BlobStorageEventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseRoutingType">DatabaseRoutingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#database_routing_type KustoEventgridDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#data_format KustoEventgridDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventgridResourceId">EventgridResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#eventgrid_resource_id KustoEventgridDataConnection#eventgrid_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#id KustoEventgridDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#managed_identity_resource_id KustoEventgridDataConnection#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.mappingRuleName">MappingRuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.skipFirstRecord">SkipFirstRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#skip_first_record KustoEventgridDataConnection#skip_first_record}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#table_name KustoEventgridDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#cluster_name KustoEventgridDataConnection#cluster_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#database_name KustoEventgridDataConnection#database_name}.

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubConsumerGroupName"></a>

```go
EventhubConsumerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}.

---

##### `EventhubId`<sup>Required</sup> <a name="EventhubId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubId"></a>

```go
EventhubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#eventhub_id KustoEventgridDataConnection#eventhub_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#location KustoEventgridDataConnection#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#name KustoEventgridDataConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#resource_group_name KustoEventgridDataConnection#resource_group_name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#storage_account_id KustoEventgridDataConnection#storage_account_id}.

---

##### `BlobStorageEventType`<sup>Optional</sup> <a name="BlobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.blobStorageEventType"></a>

```go
BlobStorageEventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}.

---

##### `DatabaseRoutingType`<sup>Optional</sup> <a name="DatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseRoutingType"></a>

```go
DatabaseRoutingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#database_routing_type KustoEventgridDataConnection#database_routing_type}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#data_format KustoEventgridDataConnection#data_format}.

---

##### `EventgridResourceId`<sup>Optional</sup> <a name="EventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventgridResourceId"></a>

```go
EventgridResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#eventgrid_resource_id KustoEventgridDataConnection#eventgrid_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#id KustoEventgridDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedIdentityResourceId`<sup>Optional</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.managedIdentityResourceId"></a>

```go
ManagedIdentityResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#managed_identity_resource_id KustoEventgridDataConnection#managed_identity_resource_id}.

---

##### `MappingRuleName`<sup>Optional</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.mappingRuleName"></a>

```go
MappingRuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}.

---

##### `SkipFirstRecord`<sup>Optional</sup> <a name="SkipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.skipFirstRecord"></a>

```go
SkipFirstRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#skip_first_record KustoEventgridDataConnection#skip_first_record}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#table_name KustoEventgridDataConnection#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.timeouts"></a>

```go
Timeouts KustoEventgridDataConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#timeouts KustoEventgridDataConnection#timeouts}

---

### KustoEventgridDataConnectionTimeouts <a name="KustoEventgridDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

&kustoeventgriddataconnection.KustoEventgridDataConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#create KustoEventgridDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#delete KustoEventgridDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#read KustoEventgridDataConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#update KustoEventgridDataConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#create KustoEventgridDataConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#delete KustoEventgridDataConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#read KustoEventgridDataConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/kusto_eventgrid_data_connection#update KustoEventgridDataConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoEventgridDataConnectionTimeoutsOutputReference <a name="KustoEventgridDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/kustoeventgriddataconnection"

kustoeventgriddataconnection.NewKustoEventgridDataConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoEventgridDataConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



