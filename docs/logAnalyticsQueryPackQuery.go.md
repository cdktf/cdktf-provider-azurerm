# `azurerm_log_analytics_query_pack_query`

Refer to the Terraform Registory for docs: [`azurerm_log_analytics_query_pack_query`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query).

# `logAnalyticsQueryPackQuery` Submodule <a name="`logAnalyticsQueryPackQuery` Submodule" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsQueryPackQuery <a name="LogAnalyticsQueryPackQuery" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query azurerm_log_analytics_query_pack_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

loganalyticsquerypackquery.NewLogAnalyticsQueryPackQuery(scope Construct, id *string, config LogAnalyticsQueryPackQueryConfig) LogAnalyticsQueryPackQuery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig">LogAnalyticsQueryPackQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig">LogAnalyticsQueryPackQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetAdditionalSettingsJson">ResetAdditionalSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetSolutions">ResetSolutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsQueryPackQueryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

---

##### `ResetAdditionalSettingsJson` <a name="ResetAdditionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetAdditionalSettingsJson"></a>

```go
func ResetAdditionalSettingsJson()
```

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetName"></a>

```go
func ResetName()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```

##### `ResetSolutions` <a name="ResetSolutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetSolutions"></a>

```go
func ResetSolutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

loganalyticsquerypackquery.LogAnalyticsQueryPackQuery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

loganalyticsquerypackquery.LogAnalyticsQueryPackQuery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

loganalyticsquerypackquery.LogAnalyticsQueryPackQuery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference">LogAnalyticsQueryPackQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJsonInput">AdditionalSettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackIdInput">QueryPackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutionsInput">SolutionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJson">AdditionalSettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackId">QueryPackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutions">Solutions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsQueryPackQueryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference">LogAnalyticsQueryPackQueryTimeoutsOutputReference</a>

---

##### `AdditionalSettingsJsonInput`<sup>Optional</sup> <a name="AdditionalSettingsJsonInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJsonInput"></a>

```go
func AdditionalSettingsJsonInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryPackIdInput`<sup>Optional</sup> <a name="QueryPackIdInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackIdInput"></a>

```go
func QueryPackIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SolutionsInput`<sup>Optional</sup> <a name="SolutionsInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutionsInput"></a>

```go
func SolutionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalSettingsJson`<sup>Required</sup> <a name="AdditionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJson"></a>

```go
func AdditionalSettingsJson() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryPackId`<sup>Required</sup> <a name="QueryPackId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackId"></a>

```go
func QueryPackId() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Solutions`<sup>Required</sup> <a name="Solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutions"></a>

```go
func Solutions() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsQueryPackQueryConfig <a name="LogAnalyticsQueryPackQueryConfig" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

&loganalyticsquerypackquery.LogAnalyticsQueryPackQueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Body: *string,
	DisplayName: *string,
	QueryPackId: *string,
	AdditionalSettingsJson: *string,
	Categories: *[]*string,
	Description: *string,
	Id: *string,
	Name: *string,
	ResourceTypes: *[]*string,
	Solutions: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.queryPackId">QueryPackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.additionalSettingsJson">AdditionalSettingsJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.categories">Categories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.solutions">Solutions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}.

---

##### `QueryPackId`<sup>Required</sup> <a name="QueryPackId" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.queryPackId"></a>

```go
QueryPackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}.

---

##### `AdditionalSettingsJson`<sup>Optional</sup> <a name="AdditionalSettingsJson" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.additionalSettingsJson"></a>

```go
AdditionalSettingsJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}.

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}.

---

##### `Solutions`<sup>Optional</sup> <a name="Solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.solutions"></a>

```go
Solutions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsQueryPackQueryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#timeouts LogAnalyticsQueryPackQuery#timeouts}

---

### LogAnalyticsQueryPackQueryTimeouts <a name="LogAnalyticsQueryPackQueryTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

&loganalyticsquerypackquery.LogAnalyticsQueryPackQueryTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsQueryPackQueryTimeoutsOutputReference <a name="LogAnalyticsQueryPackQueryTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsquerypackquery"

loganalyticsquerypackquery.NewLogAnalyticsQueryPackQueryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsQueryPackQueryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



