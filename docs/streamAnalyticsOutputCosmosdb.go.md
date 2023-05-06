# `azurerm_stream_analytics_output_cosmosdb`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_output_cosmosdb`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb).

# `streamAnalyticsOutputCosmosdb` Submodule <a name="`streamAnalyticsOutputCosmosdb` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputCosmosdb <a name="StreamAnalyticsOutputCosmosdb" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb azurerm_stream_analytics_output_cosmosdb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

streamanalyticsoutputcosmosdb.NewStreamAnalyticsOutputCosmosdb(scope Construct, id *string, config StreamAnalyticsOutputCosmosdbConfig) StreamAnalyticsOutputCosmosdb
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig">StreamAnalyticsOutputCosmosdbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig">StreamAnalyticsOutputCosmosdbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetDocumentId">ResetDocumentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsOutputCosmosdbTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>

---

##### `ResetDocumentId` <a name="ResetDocumentId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetDocumentId"></a>

```go
func ResetDocumentId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetId"></a>

```go
func ResetId()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetPartitionKey"></a>

```go
func ResetPartitionKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

streamanalyticsoutputcosmosdb.StreamAnalyticsOutputCosmosdb_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

streamanalyticsoutputcosmosdb.StreamAnalyticsOutputCosmosdb_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

streamanalyticsoutputcosmosdb.StreamAnalyticsOutputCosmosdb_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference">StreamAnalyticsOutputCosmosdbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKeyInput">CosmosdbAccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseIdInput">CosmosdbSqlDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentIdInput">DocumentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobIdInput">StreamAnalyticsJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKey">CosmosdbAccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseId">CosmosdbSqlDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentId">DocumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsOutputCosmosdbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference">StreamAnalyticsOutputCosmosdbTimeoutsOutputReference</a>

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `CosmosdbAccountKeyInput`<sup>Optional</sup> <a name="CosmosdbAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKeyInput"></a>

```go
func CosmosdbAccountKeyInput() *string
```

- *Type:* *string

---

##### `CosmosdbSqlDatabaseIdInput`<sup>Optional</sup> <a name="CosmosdbSqlDatabaseIdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseIdInput"></a>

```go
func CosmosdbSqlDatabaseIdInput() *string
```

- *Type:* *string

---

##### `DocumentIdInput`<sup>Optional</sup> <a name="DocumentIdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentIdInput"></a>

```go
func DocumentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKeyInput"></a>

```go
func PartitionKeyInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobIdInput`<sup>Optional</sup> <a name="StreamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobIdInput"></a>

```go
func StreamAnalyticsJobIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `CosmosdbAccountKey`<sup>Required</sup> <a name="CosmosdbAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKey"></a>

```go
func CosmosdbAccountKey() *string
```

- *Type:* *string

---

##### `CosmosdbSqlDatabaseId`<sup>Required</sup> <a name="CosmosdbSqlDatabaseId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseId"></a>

```go
func CosmosdbSqlDatabaseId() *string
```

- *Type:* *string

---

##### `DocumentId`<sup>Required</sup> <a name="DocumentId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentId"></a>

```go
func DocumentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobId"></a>

```go
func StreamAnalyticsJobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputCosmosdbConfig <a name="StreamAnalyticsOutputCosmosdbConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

&streamanalyticsoutputcosmosdb.StreamAnalyticsOutputCosmosdbConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerName: *string,
	CosmosdbAccountKey: *string,
	CosmosdbSqlDatabaseId: *string,
	Name: *string,
	StreamAnalyticsJobId: *string,
	DocumentId: *string,
	Id: *string,
	PartitionKey: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbAccountKey">CosmosdbAccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbSqlDatabaseId">CosmosdbSqlDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.documentId">DocumentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}.

---

##### `CosmosdbAccountKey`<sup>Required</sup> <a name="CosmosdbAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbAccountKey"></a>

```go
CosmosdbAccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}.

---

##### `CosmosdbSqlDatabaseId`<sup>Required</sup> <a name="CosmosdbSqlDatabaseId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbSqlDatabaseId"></a>

```go
CosmosdbSqlDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}.

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.streamAnalyticsJobId"></a>

```go
StreamAnalyticsJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}.

---

##### `DocumentId`<sup>Optional</sup> <a name="DocumentId" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.documentId"></a>

```go
DocumentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.partitionKey"></a>

```go
PartitionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.timeouts"></a>

```go
Timeouts StreamAnalyticsOutputCosmosdbTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#timeouts StreamAnalyticsOutputCosmosdb#timeouts}

---

### StreamAnalyticsOutputCosmosdbTimeouts <a name="StreamAnalyticsOutputCosmosdbTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

&streamanalyticsoutputcosmosdb.StreamAnalyticsOutputCosmosdbTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#create StreamAnalyticsOutputCosmosdb#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#delete StreamAnalyticsOutputCosmosdb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#read StreamAnalyticsOutputCosmosdb#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#update StreamAnalyticsOutputCosmosdb#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#create StreamAnalyticsOutputCosmosdb#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#delete StreamAnalyticsOutputCosmosdb#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#read StreamAnalyticsOutputCosmosdb#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_output_cosmosdb#update StreamAnalyticsOutputCosmosdb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputCosmosdbTimeoutsOutputReference <a name="StreamAnalyticsOutputCosmosdbTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/streamanalyticsoutputcosmosdb"

streamanalyticsoutputcosmosdb.NewStreamAnalyticsOutputCosmosdbTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsOutputCosmosdbTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



