# `data_azurerm_advisor_recommendations`

Refer to the Terraform Registory for docs: [`data_azurerm_advisor_recommendations`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations).

# `dataAzurermAdvisorRecommendations` Submodule <a name="`dataAzurermAdvisorRecommendations` Submodule" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAdvisorRecommendations <a name="DataAzurermAdvisorRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations azurerm_advisor_recommendations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.NewDataAzurermAdvisorRecommendations(scope Construct, id *string, config DataAzurermAdvisorRecommendationsConfig) DataAzurermAdvisorRecommendations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig">DataAzurermAdvisorRecommendationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig">DataAzurermAdvisorRecommendationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory">ResetFilterByCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups">ResetFilterByResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermAdvisorRecommendationsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

---

##### `ResetFilterByCategory` <a name="ResetFilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory"></a>

```go
func ResetFilterByCategory()
```

##### `ResetFilterByResourceGroups` <a name="ResetFilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups"></a>

```go
func ResetFilterByResourceGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.DataAzurermAdvisorRecommendations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.DataAzurermAdvisorRecommendations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.DataAzurermAdvisorRecommendations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations">Recommendations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput">FilterByCategoryInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput">FilterByResourceGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory">FilterByCategory</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups">FilterByResourceGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Recommendations`<sup>Required</sup> <a name="Recommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations"></a>

```go
func Recommendations() DataAzurermAdvisorRecommendationsRecommendationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts"></a>

```go
func Timeouts() DataAzurermAdvisorRecommendationsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a>

---

##### `FilterByCategoryInput`<sup>Optional</sup> <a name="FilterByCategoryInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput"></a>

```go
func FilterByCategoryInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterByResourceGroupsInput`<sup>Optional</sup> <a name="FilterByResourceGroupsInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput"></a>

```go
func FilterByResourceGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterByCategory`<sup>Required</sup> <a name="FilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory"></a>

```go
func FilterByCategory() *[]*string
```

- *Type:* *[]*string

---

##### `FilterByResourceGroups`<sup>Required</sup> <a name="FilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups"></a>

```go
func FilterByResourceGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAdvisorRecommendationsConfig <a name="DataAzurermAdvisorRecommendationsConfig" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

&dataazurermadvisorrecommendations.DataAzurermAdvisorRecommendationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FilterByCategory: *[]*string,
	FilterByResourceGroups: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory">FilterByCategory</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups">FilterByResourceGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilterByCategory`<sup>Optional</sup> <a name="FilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory"></a>

```go
FilterByCategory *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}.

---

##### `FilterByResourceGroups`<sup>Optional</sup> <a name="FilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups"></a>

```go
FilterByResourceGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts"></a>

```go
Timeouts DataAzurermAdvisorRecommendationsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#timeouts DataAzurermAdvisorRecommendations#timeouts}

---

### DataAzurermAdvisorRecommendationsRecommendations <a name="DataAzurermAdvisorRecommendationsRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

&dataazurermadvisorrecommendations.DataAzurermAdvisorRecommendationsRecommendations {

}
```


### DataAzurermAdvisorRecommendationsTimeouts <a name="DataAzurermAdvisorRecommendationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

&dataazurermadvisorrecommendations.DataAzurermAdvisorRecommendationsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAdvisorRecommendationsRecommendationsList <a name="DataAzurermAdvisorRecommendationsRecommendationsList" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.NewDataAzurermAdvisorRecommendationsRecommendationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermAdvisorRecommendationsRecommendationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get"></a>

```go
func Get(index *f64) DataAzurermAdvisorRecommendationsRecommendationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermAdvisorRecommendationsRecommendationsOutputReference <a name="DataAzurermAdvisorRecommendationsRecommendationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.NewDataAzurermAdvisorRecommendationsRecommendationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermAdvisorRecommendationsRecommendationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact">Impact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName">RecommendationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId">RecommendationTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames">SuppressionNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime">UpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact"></a>

```go
func Impact() *string
```

- *Type:* *string

---

##### `RecommendationName`<sup>Required</sup> <a name="RecommendationName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName"></a>

```go
func RecommendationName() *string
```

- *Type:* *string

---

##### `RecommendationTypeId`<sup>Required</sup> <a name="RecommendationTypeId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId"></a>

```go
func RecommendationTypeId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SuppressionNames`<sup>Required</sup> <a name="SuppressionNames" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames"></a>

```go
func SuppressionNames() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime"></a>

```go
func UpdatedTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermAdvisorRecommendationsRecommendations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a>

---


### DataAzurermAdvisorRecommendationsTimeoutsOutputReference <a name="DataAzurermAdvisorRecommendationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermadvisorrecommendations"

dataazurermadvisorrecommendations.NewDataAzurermAdvisorRecommendationsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermAdvisorRecommendationsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



