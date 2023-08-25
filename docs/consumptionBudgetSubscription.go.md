# `azurerm_consumption_budget_subscription`

Refer to the Terraform Registory for docs: [`azurerm_consumption_budget_subscription`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription).

# `consumptionBudgetSubscription` Submodule <a name="`consumptionBudgetSubscription` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetSubscription <a name="ConsumptionBudgetSubscription" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription azurerm_consumption_budget_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscription(scope Construct, id *string, config ConsumptionBudgetSubscriptionConfig) ConsumptionBudgetSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig">ConsumptionBudgetSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig">ConsumptionBudgetSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeGrain">ResetTimeGrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter"></a>

```go
func PutFilter(value ConsumptionBudgetSubscriptionFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts"></a>

```go
func PutTimeouts(value ConsumptionBudgetSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod"></a>

```go
func PutTimePeriod(value ConsumptionBudgetSubscriptionTimePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeGrain` <a name="ResetTimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeGrain"></a>

```go
func ResetTimeGrain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.ConsumptionBudgetSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.ConsumptionBudgetSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.ConsumptionBudgetSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference">ConsumptionBudgetSubscriptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList">ConsumptionBudgetSubscriptionNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference">ConsumptionBudgetSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference">ConsumptionBudgetSubscriptionTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrainInput">TimeGrainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrain">TimeGrain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filter"></a>

```go
func Filter() ConsumptionBudgetSubscriptionFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference">ConsumptionBudgetSubscriptionFilterOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notification"></a>

```go
func Notification() ConsumptionBudgetSubscriptionNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList">ConsumptionBudgetSubscriptionNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeouts"></a>

```go
func Timeouts() ConsumptionBudgetSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference">ConsumptionBudgetSubscriptionTimeoutsOutputReference</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriod"></a>

```go
func TimePeriod() ConsumptionBudgetSubscriptionTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference">ConsumptionBudgetSubscriptionTimePeriodOutputReference</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filterInput"></a>

```go
func FilterInput() ConsumptionBudgetSubscriptionFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeGrainInput`<sup>Optional</sup> <a name="TimeGrainInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrainInput"></a>

```go
func TimeGrainInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriodInput"></a>

```go
func TimePeriodInput() ConsumptionBudgetSubscriptionTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrain"></a>

```go
func TimeGrain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetSubscriptionConfig <a name="ConsumptionBudgetSubscriptionConfig" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Amount: *f64,
	Name: *string,
	Notification: interface{},
	SubscriptionId: *string,
	TimePeriod: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod,
	Etag: *string,
	Filter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter,
	Id: *string,
	TimeGrain: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.amount">Amount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeGrain">TimeGrain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#notification ConsumptionBudgetSubscription#notification}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}.

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timePeriod"></a>

```go
TimePeriod ConsumptionBudgetSubscriptionTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#time_period ConsumptionBudgetSubscription#time_period}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.filter"></a>

```go
Filter ConsumptionBudgetSubscriptionFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#filter ConsumptionBudgetSubscription#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGrain`<sup>Optional</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeGrain"></a>

```go
TimeGrain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeouts"></a>

```go
Timeouts ConsumptionBudgetSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#timeouts ConsumptionBudgetSubscription#timeouts}

---

### ConsumptionBudgetSubscriptionFilter <a name="ConsumptionBudgetSubscriptionFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionFilter {
	Dimension: interface{},
	Not: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot,
	Tag: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.dimension">Dimension</a></code> | <code>interface{}</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.dimension"></a>

```go
Dimension interface{}
```

- *Type:* interface{}

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.not"></a>

```go
Not ConsumptionBudgetSubscriptionFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#not ConsumptionBudgetSubscription#not}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

### ConsumptionBudgetSubscriptionFilterDimension <a name="ConsumptionBudgetSubscriptionFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionFilterDimension {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterNot <a name="ConsumptionBudgetSubscriptionFilterNot" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionFilterNot {
	Dimension: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension,
	Tag: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a></code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.dimension"></a>

```go
Dimension ConsumptionBudgetSubscriptionFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.tag"></a>

```go
Tag ConsumptionBudgetSubscriptionFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

### ConsumptionBudgetSubscriptionFilterNotDimension <a name="ConsumptionBudgetSubscriptionFilterNotDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionFilterNotDimension {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterNotTag <a name="ConsumptionBudgetSubscriptionFilterNotTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionFilterNotTag {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterTag <a name="ConsumptionBudgetSubscriptionFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionFilterTag {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionNotification <a name="ConsumptionBudgetSubscriptionNotification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionNotification {
	Operator: *string,
	Threshold: *f64,
	ContactEmails: *[]*string,
	ContactGroups: *[]*string,
	ContactRoles: *[]*string,
	Enabled: interface{},
	ThresholdType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#threshold ConsumptionBudgetSubscription#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#contact_emails ConsumptionBudgetSubscription#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactGroups">ContactGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#contact_groups ConsumptionBudgetSubscription#contact_groups}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactRoles">ContactRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#contact_roles ConsumptionBudgetSubscription#contact_roles}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#enabled ConsumptionBudgetSubscription#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#threshold_type ConsumptionBudgetSubscription#threshold_type}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#threshold ConsumptionBudgetSubscription#threshold}.

---

##### `ContactEmails`<sup>Optional</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactEmails"></a>

```go
ContactEmails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#contact_emails ConsumptionBudgetSubscription#contact_emails}.

---

##### `ContactGroups`<sup>Optional</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactGroups"></a>

```go
ContactGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#contact_groups ConsumptionBudgetSubscription#contact_groups}.

---

##### `ContactRoles`<sup>Optional</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactRoles"></a>

```go
ContactRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#contact_roles ConsumptionBudgetSubscription#contact_roles}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#enabled ConsumptionBudgetSubscription#enabled}.

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#threshold_type ConsumptionBudgetSubscription#threshold_type}.

---

### ConsumptionBudgetSubscriptionTimeouts <a name="ConsumptionBudgetSubscriptionTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}.

---

### ConsumptionBudgetSubscriptionTimePeriod <a name="ConsumptionBudgetSubscriptionTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

&consumptionbudgetsubscription.ConsumptionBudgetSubscriptionTimePeriod {
	StartDate: *string,
	EndDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.startDate">StartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetSubscriptionFilterDimensionList <a name="ConsumptionBudgetSubscriptionFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetSubscriptionFilterDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetSubscriptionFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionFilterDimensionOutputReference <a name="ConsumptionBudgetSubscriptionFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetSubscriptionFilterDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference <a name="ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterNotDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetSubscriptionFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

---


### ConsumptionBudgetSubscriptionFilterNotOutputReference <a name="ConsumptionBudgetSubscriptionFilterNotOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetSubscriptionFilterNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension"></a>

```go
func PutDimension(value ConsumptionBudgetSubscriptionFilterNotDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag"></a>

```go
func PutTag(value ConsumptionBudgetSubscriptionFilterNotTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference">ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference">ConsumptionBudgetSubscriptionFilterNotTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tagInput">TagInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension"></a>

```go
func Dimension() ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference">ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag"></a>

```go
func Tag() ConsumptionBudgetSubscriptionFilterNotTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference">ConsumptionBudgetSubscriptionFilterNotTagOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() ConsumptionBudgetSubscriptionFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tagInput"></a>

```go
func TagInput() ConsumptionBudgetSubscriptionFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetSubscriptionFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

---


### ConsumptionBudgetSubscriptionFilterNotTagOutputReference <a name="ConsumptionBudgetSubscriptionFilterNotTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterNotTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetSubscriptionFilterNotTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetSubscriptionFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

---


### ConsumptionBudgetSubscriptionFilterOutputReference <a name="ConsumptionBudgetSubscriptionFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetSubscriptionFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension"></a>

```go
func PutDimension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNot` <a name="PutNot" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot"></a>

```go
func PutNot(value ConsumptionBudgetSubscriptionFilterNot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList">ConsumptionBudgetSubscriptionFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference">ConsumptionBudgetSubscriptionFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList">ConsumptionBudgetSubscriptionFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimension"></a>

```go
func Dimension() ConsumptionBudgetSubscriptionFilterDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList">ConsumptionBudgetSubscriptionFilterDimensionList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.not"></a>

```go
func Not() ConsumptionBudgetSubscriptionFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference">ConsumptionBudgetSubscriptionFilterNotOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tag"></a>

```go
func Tag() ConsumptionBudgetSubscriptionFilterTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList">ConsumptionBudgetSubscriptionFilterTagList</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() interface{}
```

- *Type:* interface{}

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.notInput"></a>

```go
func NotInput() ConsumptionBudgetSubscriptionFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetSubscriptionFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---


### ConsumptionBudgetSubscriptionFilterTagList <a name="ConsumptionBudgetSubscriptionFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetSubscriptionFilterTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetSubscriptionFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionFilterTagOutputReference <a name="ConsumptionBudgetSubscriptionFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionFilterTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetSubscriptionFilterTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionNotificationList <a name="ConsumptionBudgetSubscriptionNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetSubscriptionNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetSubscriptionNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionNotificationOutputReference <a name="ConsumptionBudgetSubscriptionNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetSubscriptionNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactEmails">ResetContactEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactGroups">ResetContactGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactRoles">ResetContactRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactEmails` <a name="ResetContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactEmails"></a>

```go
func ResetContactEmails()
```

##### `ResetContactGroups` <a name="ResetContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactGroups"></a>

```go
func ResetContactGroups()
```

##### `ResetContactRoles` <a name="ResetContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactRoles"></a>

```go
func ResetContactRoles()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetThresholdType"></a>

```go
func ResetThresholdType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroupsInput">ContactGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRolesInput">ContactRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups">ContactGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles">ContactRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmailsInput"></a>

```go
func ContactEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContactGroupsInput`<sup>Optional</sup> <a name="ContactGroupsInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroupsInput"></a>

```go
func ContactGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContactRolesInput`<sup>Optional</sup> <a name="ContactRolesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRolesInput"></a>

```go
func ContactRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails"></a>

```go
func ContactEmails() *[]*string
```

- *Type:* *[]*string

---

##### `ContactGroups`<sup>Required</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups"></a>

```go
func ContactGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ContactRoles`<sup>Required</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles"></a>

```go
func ContactRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionTimeoutsOutputReference <a name="ConsumptionBudgetSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetSubscriptionTimePeriodOutputReference <a name="ConsumptionBudgetSubscriptionTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/consumptionbudgetsubscription"

consumptionbudgetsubscription.NewConsumptionBudgetSubscriptionTimePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetSubscriptionTimePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetSubscriptionTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---



