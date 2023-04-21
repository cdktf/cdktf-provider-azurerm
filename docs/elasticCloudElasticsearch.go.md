# `azurerm_elastic_cloud_elasticsearch`

Refer to the Terraform Registory for docs: [`azurerm_elastic_cloud_elasticsearch`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch).

# `elasticCloudElasticsearch` Submodule <a name="`elasticCloudElasticsearch` Submodule" id="@cdktf/provider-azurerm.elasticCloudElasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticCloudElasticsearch <a name="ElasticCloudElasticsearch" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.NewElasticCloudElasticsearch(scope Construct, id *string, config ElasticCloudElasticsearchConfig) ElasticCloudElasticsearch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig">ElasticCloudElasticsearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig">ElasticCloudElasticsearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetMonitoringEnabled">ResetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs"></a>

```go
func PutLogs(value ElasticCloudElasticsearchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts"></a>

```go
func PutTimeouts(value ElasticCloudElasticsearchTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetId"></a>

```go
func ResetId()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetLogs"></a>

```go
func ResetLogs()
```

##### `ResetMonitoringEnabled` <a name="ResetMonitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetMonitoringEnabled"></a>

```go
func ResetMonitoringEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.ElasticCloudElasticsearch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.ElasticCloudElasticsearch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.ElasticCloudElasticsearch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudDeploymentId">ElasticCloudDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl">ElasticCloudSsoDefaultUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudUserId">ElasticCloudUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticsearchServiceUrl">ElasticsearchServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaServiceUrl">KibanaServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaSsoUri">KibanaSsoUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference">ElasticCloudElasticsearchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference">ElasticCloudElasticsearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddressInput">ElasticCloudEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logsInput">LogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabledInput">MonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddress">ElasticCloudEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ElasticCloudDeploymentId`<sup>Required</sup> <a name="ElasticCloudDeploymentId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudDeploymentId"></a>

```go
func ElasticCloudDeploymentId() *string
```

- *Type:* *string

---

##### `ElasticCloudSsoDefaultUrl`<sup>Required</sup> <a name="ElasticCloudSsoDefaultUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl"></a>

```go
func ElasticCloudSsoDefaultUrl() *string
```

- *Type:* *string

---

##### `ElasticCloudUserId`<sup>Required</sup> <a name="ElasticCloudUserId" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudUserId"></a>

```go
func ElasticCloudUserId() *string
```

- *Type:* *string

---

##### `ElasticsearchServiceUrl`<sup>Required</sup> <a name="ElasticsearchServiceUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticsearchServiceUrl"></a>

```go
func ElasticsearchServiceUrl() *string
```

- *Type:* *string

---

##### `KibanaServiceUrl`<sup>Required</sup> <a name="KibanaServiceUrl" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaServiceUrl"></a>

```go
func KibanaServiceUrl() *string
```

- *Type:* *string

---

##### `KibanaSsoUri`<sup>Required</sup> <a name="KibanaSsoUri" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.kibanaSsoUri"></a>

```go
func KibanaSsoUri() *string
```

- *Type:* *string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logs"></a>

```go
func Logs() ElasticCloudElasticsearchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference">ElasticCloudElasticsearchLogsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeouts"></a>

```go
func Timeouts() ElasticCloudElasticsearchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference">ElasticCloudElasticsearchTimeoutsOutputReference</a>

---

##### `ElasticCloudEmailAddressInput`<sup>Optional</sup> <a name="ElasticCloudEmailAddressInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddressInput"></a>

```go
func ElasticCloudEmailAddressInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.logsInput"></a>

```go
func LogsInput() ElasticCloudElasticsearchLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---

##### `MonitoringEnabledInput`<sup>Optional</sup> <a name="MonitoringEnabledInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabledInput"></a>

```go
func MonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticCloudEmailAddress`<sup>Required</sup> <a name="ElasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.elasticCloudEmailAddress"></a>

```go
func ElasticCloudEmailAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MonitoringEnabled`<sup>Required</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.monitoringEnabled"></a>

```go
func MonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticCloudElasticsearchConfig <a name="ElasticCloudElasticsearchConfig" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

&elasticcloudelasticsearch.ElasticCloudElasticsearchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ElasticCloudEmailAddress: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	Id: *string,
	Logs: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs,
	MonitoringEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.elasticCloudEmailAddress">ElasticCloudEmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ElasticCloudEmailAddress`<sup>Required</sup> <a name="ElasticCloudEmailAddress" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.elasticCloudEmailAddress"></a>

```go
ElasticCloudEmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.logs"></a>

```go
Logs ElasticCloudElasticsearchLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#logs ElasticCloudElasticsearch#logs}

---

##### `MonitoringEnabled`<sup>Optional</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.monitoringEnabled"></a>

```go
MonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchConfig.property.timeouts"></a>

```go
Timeouts ElasticCloudElasticsearchTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts">ElasticCloudElasticsearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#timeouts ElasticCloudElasticsearch#timeouts}

---

### ElasticCloudElasticsearchLogs <a name="ElasticCloudElasticsearchLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

&elasticcloudelasticsearch.ElasticCloudElasticsearchLogs {
	FilteringTag: interface{},
	SendActivityLogs: interface{},
	SendAzureadLogs: interface{},
	SendSubscriptionLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.filteringTag">FilteringTag</a></code> | <code>interface{}</code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendActivityLogs">SendActivityLogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendAzureadLogs">SendAzureadLogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendSubscriptionLogs">SendSubscriptionLogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}. |

---

##### `FilteringTag`<sup>Optional</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.filteringTag"></a>

```go
FilteringTag interface{}
```

- *Type:* interface{}

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#filtering_tag ElasticCloudElasticsearch#filtering_tag}

---

##### `SendActivityLogs`<sup>Optional</sup> <a name="SendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendActivityLogs"></a>

```go
SendActivityLogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}.

---

##### `SendAzureadLogs`<sup>Optional</sup> <a name="SendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendAzureadLogs"></a>

```go
SendAzureadLogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}.

---

##### `SendSubscriptionLogs`<sup>Optional</sup> <a name="SendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs.property.sendSubscriptionLogs"></a>

```go
SendSubscriptionLogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}.

---

### ElasticCloudElasticsearchLogsFilteringTag <a name="ElasticCloudElasticsearchLogsFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

&elasticcloudelasticsearch.ElasticCloudElasticsearchLogsFilteringTag {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}.

---

### ElasticCloudElasticsearchTimeouts <a name="ElasticCloudElasticsearchTimeouts" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

&elasticcloudelasticsearch.ElasticCloudElasticsearchTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticCloudElasticsearchLogsFilteringTagList <a name="ElasticCloudElasticsearchLogsFilteringTagList" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.NewElasticCloudElasticsearchLogsFilteringTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticCloudElasticsearchLogsFilteringTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get"></a>

```go
func Get(index *f64) ElasticCloudElasticsearchLogsFilteringTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticCloudElasticsearchLogsFilteringTagOutputReference <a name="ElasticCloudElasticsearchLogsFilteringTagOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.NewElasticCloudElasticsearchLogsFilteringTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticCloudElasticsearchLogsFilteringTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticCloudElasticsearchLogsOutputReference <a name="ElasticCloudElasticsearchLogsOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.NewElasticCloudElasticsearchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticCloudElasticsearchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag">PutFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetFilteringTag">ResetFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendActivityLogs">ResetSendActivityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendAzureadLogs">ResetSendAzureadLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendSubscriptionLogs">ResetSendSubscriptionLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilteringTag` <a name="PutFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag"></a>

```go
func PutFilteringTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilteringTag` <a name="ResetFilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetFilteringTag"></a>

```go
func ResetFilteringTag()
```

##### `ResetSendActivityLogs` <a name="ResetSendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendActivityLogs"></a>

```go
func ResetSendActivityLogs()
```

##### `ResetSendAzureadLogs` <a name="ResetSendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendAzureadLogs"></a>

```go
func ResetSendAzureadLogs()
```

##### `ResetSendSubscriptionLogs` <a name="ResetSendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.resetSendSubscriptionLogs"></a>

```go
func ResetSendSubscriptionLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTag">FilteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList">ElasticCloudElasticsearchLogsFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTagInput">FilteringTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogsInput">SendActivityLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogsInput">SendAzureadLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogsInput">SendSubscriptionLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs">SendActivityLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs">SendAzureadLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs">SendSubscriptionLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTag"></a>

```go
func FilteringTag() ElasticCloudElasticsearchLogsFilteringTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsFilteringTagList">ElasticCloudElasticsearchLogsFilteringTagList</a>

---

##### `FilteringTagInput`<sup>Optional</sup> <a name="FilteringTagInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.filteringTagInput"></a>

```go
func FilteringTagInput() interface{}
```

- *Type:* interface{}

---

##### `SendActivityLogsInput`<sup>Optional</sup> <a name="SendActivityLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogsInput"></a>

```go
func SendActivityLogsInput() interface{}
```

- *Type:* interface{}

---

##### `SendAzureadLogsInput`<sup>Optional</sup> <a name="SendAzureadLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogsInput"></a>

```go
func SendAzureadLogsInput() interface{}
```

- *Type:* interface{}

---

##### `SendSubscriptionLogsInput`<sup>Optional</sup> <a name="SendSubscriptionLogsInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogsInput"></a>

```go
func SendSubscriptionLogsInput() interface{}
```

- *Type:* interface{}

---

##### `SendActivityLogs`<sup>Required</sup> <a name="SendActivityLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs"></a>

```go
func SendActivityLogs() interface{}
```

- *Type:* interface{}

---

##### `SendAzureadLogs`<sup>Required</sup> <a name="SendAzureadLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs"></a>

```go
func SendAzureadLogs() interface{}
```

- *Type:* interface{}

---

##### `SendSubscriptionLogs`<sup>Required</sup> <a name="SendSubscriptionLogs" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs"></a>

```go
func SendSubscriptionLogs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticCloudElasticsearchLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchLogs">ElasticCloudElasticsearchLogs</a>

---


### ElasticCloudElasticsearchTimeoutsOutputReference <a name="ElasticCloudElasticsearchTimeoutsOutputReference" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/elasticcloudelasticsearch"

elasticcloudelasticsearch.NewElasticCloudElasticsearchTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticCloudElasticsearchTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.elasticCloudElasticsearch.ElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



