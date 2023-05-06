# `azurerm_consumption_budget_management_group`

Refer to the Terraform Registory for docs: [`azurerm_consumption_budget_management_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group).

# `consumptionBudgetManagementGroup` Submodule <a name="`consumptionBudgetManagementGroup` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetManagementGroup <a name="ConsumptionBudgetManagementGroup" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group azurerm_consumption_budget_management_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroup(scope Construct, id *string, config ConsumptionBudgetManagementGroupConfig) ConsumptionBudgetManagementGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig">ConsumptionBudgetManagementGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig">ConsumptionBudgetManagementGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeGrain">ResetTimeGrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putFilter"></a>

```go
func PutFilter(value ConsumptionBudgetManagementGroupFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimeouts"></a>

```go
func PutTimeouts(value ConsumptionBudgetManagementGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts">ConsumptionBudgetManagementGroupTimeouts</a>

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimePeriod"></a>

```go
func PutTimePeriod(value ConsumptionBudgetManagementGroupTimePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeGrain` <a name="ResetTimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeGrain"></a>

```go
func ResetTimeGrain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference">ConsumptionBudgetManagementGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList">ConsumptionBudgetManagementGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference">ConsumptionBudgetManagementGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference">ConsumptionBudgetManagementGroupTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrainInput">TimeGrainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupId">ManagementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrain">TimeGrain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filter"></a>

```go
func Filter() ConsumptionBudgetManagementGroupFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference">ConsumptionBudgetManagementGroupFilterOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notification"></a>

```go
func Notification() ConsumptionBudgetManagementGroupNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList">ConsumptionBudgetManagementGroupNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeouts"></a>

```go
func Timeouts() ConsumptionBudgetManagementGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference">ConsumptionBudgetManagementGroupTimeoutsOutputReference</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriod"></a>

```go
func TimePeriod() ConsumptionBudgetManagementGroupTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference">ConsumptionBudgetManagementGroupTimePeriodOutputReference</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filterInput"></a>

```go
func FilterInput() ConsumptionBudgetManagementGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupIdInput"></a>

```go
func ManagementGroupIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeGrainInput`<sup>Optional</sup> <a name="TimeGrainInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrainInput"></a>

```go
func TimeGrainInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriodInput"></a>

```go
func TimePeriodInput() ConsumptionBudgetManagementGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupId"></a>

```go
func ManagementGroupId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrain"></a>

```go
func TimeGrain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetManagementGroupConfig <a name="ConsumptionBudgetManagementGroupConfig" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Amount: *f64,
	ManagementGroupId: *string,
	Name: *string,
	Notification: interface{},
	TimePeriod: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod,
	Etag: *string,
	Filter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter,
	Id: *string,
	TimeGrain: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.amount">Amount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#amount ConsumptionBudgetManagementGroup#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#management_group_id ConsumptionBudgetManagementGroup#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#etag ConsumptionBudgetManagementGroup#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#id ConsumptionBudgetManagementGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeGrain">TimeGrain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#time_grain ConsumptionBudgetManagementGroup#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts">ConsumptionBudgetManagementGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#amount ConsumptionBudgetManagementGroup#amount}.

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.managementGroupId"></a>

```go
ManagementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#management_group_id ConsumptionBudgetManagementGroup#management_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#notification ConsumptionBudgetManagementGroup#notification}

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timePeriod"></a>

```go
TimePeriod ConsumptionBudgetManagementGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#time_period ConsumptionBudgetManagementGroup#time_period}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#etag ConsumptionBudgetManagementGroup#etag}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.filter"></a>

```go
Filter ConsumptionBudgetManagementGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#filter ConsumptionBudgetManagementGroup#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#id ConsumptionBudgetManagementGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGrain`<sup>Optional</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeGrain"></a>

```go
TimeGrain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#time_grain ConsumptionBudgetManagementGroup#time_grain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeouts"></a>

```go
Timeouts ConsumptionBudgetManagementGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts">ConsumptionBudgetManagementGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#timeouts ConsumptionBudgetManagementGroup#timeouts}

---

### ConsumptionBudgetManagementGroupFilter <a name="ConsumptionBudgetManagementGroupFilter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupFilter {
	Dimension: interface{},
	Not: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot,
	Tag: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.dimension">Dimension</a></code> | <code>interface{}</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.dimension"></a>

```go
Dimension interface{}
```

- *Type:* interface{}

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#dimension ConsumptionBudgetManagementGroup#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.not"></a>

```go
Not ConsumptionBudgetManagementGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#not ConsumptionBudgetManagementGroup#not}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#tag ConsumptionBudgetManagementGroup#tag}

---

### ConsumptionBudgetManagementGroupFilterDimension <a name="ConsumptionBudgetManagementGroupFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupFilterDimension {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupFilterNot <a name="ConsumptionBudgetManagementGroupFilterNot" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupFilterNot {
	Dimension: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension,
	Tag: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a></code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.dimension"></a>

```go
Dimension ConsumptionBudgetManagementGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#dimension ConsumptionBudgetManagementGroup#dimension}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.tag"></a>

```go
Tag ConsumptionBudgetManagementGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#tag ConsumptionBudgetManagementGroup#tag}

---

### ConsumptionBudgetManagementGroupFilterNotDimension <a name="ConsumptionBudgetManagementGroupFilterNotDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupFilterNotDimension {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupFilterNotTag <a name="ConsumptionBudgetManagementGroupFilterNotTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupFilterNotTag {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupFilterTag <a name="ConsumptionBudgetManagementGroupFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupFilterTag {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupNotification <a name="ConsumptionBudgetManagementGroupNotification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupNotification {
	ContactEmails: *[]*string,
	Operator: *string,
	Threshold: *f64,
	Enabled: interface{},
	ThresholdType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#contact_emails ConsumptionBudgetManagementGroup#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#threshold ConsumptionBudgetManagementGroup#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#enabled ConsumptionBudgetManagementGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#threshold_type ConsumptionBudgetManagementGroup#threshold_type}. |

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.contactEmails"></a>

```go
ContactEmails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#contact_emails ConsumptionBudgetManagementGroup#contact_emails}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#threshold ConsumptionBudgetManagementGroup#threshold}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#enabled ConsumptionBudgetManagementGroup#enabled}.

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#threshold_type ConsumptionBudgetManagementGroup#threshold_type}.

---

### ConsumptionBudgetManagementGroupTimeouts <a name="ConsumptionBudgetManagementGroupTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#create ConsumptionBudgetManagementGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#delete ConsumptionBudgetManagementGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#read ConsumptionBudgetManagementGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#update ConsumptionBudgetManagementGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#create ConsumptionBudgetManagementGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#delete ConsumptionBudgetManagementGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#read ConsumptionBudgetManagementGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#update ConsumptionBudgetManagementGroup#update}.

---

### ConsumptionBudgetManagementGroupTimePeriod <a name="ConsumptionBudgetManagementGroupTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

&consumptionbudgetmanagementgroup.ConsumptionBudgetManagementGroupTimePeriod {
	StartDate: *string,
	EndDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.startDate">StartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#start_date ConsumptionBudgetManagementGroup#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#end_date ConsumptionBudgetManagementGroup#end_date}. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#start_date ConsumptionBudgetManagementGroup#start_date}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/consumption_budget_management_group#end_date ConsumptionBudgetManagementGroup#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetManagementGroupFilterDimensionList <a name="ConsumptionBudgetManagementGroupFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetManagementGroupFilterDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetManagementGroupFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupFilterDimensionOutputReference <a name="ConsumptionBudgetManagementGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetManagementGroupFilterDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference <a name="ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterNotDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetManagementGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

---


### ConsumptionBudgetManagementGroupFilterNotOutputReference <a name="ConsumptionBudgetManagementGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetManagementGroupFilterNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putDimension"></a>

```go
func PutDimension(value ConsumptionBudgetManagementGroupFilterNotDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putTag"></a>

```go
func PutTag(value ConsumptionBudgetManagementGroupFilterNotTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference">ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference">ConsumptionBudgetManagementGroupFilterNotTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tagInput">TagInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimension"></a>

```go
func Dimension() ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference">ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tag"></a>

```go
func Tag() ConsumptionBudgetManagementGroupFilterNotTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference">ConsumptionBudgetManagementGroupFilterNotTagOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() ConsumptionBudgetManagementGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tagInput"></a>

```go
func TagInput() ConsumptionBudgetManagementGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetManagementGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

---


### ConsumptionBudgetManagementGroupFilterNotTagOutputReference <a name="ConsumptionBudgetManagementGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterNotTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetManagementGroupFilterNotTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetManagementGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

---


### ConsumptionBudgetManagementGroupFilterOutputReference <a name="ConsumptionBudgetManagementGroupFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetManagementGroupFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putDimension"></a>

```go
func PutDimension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNot` <a name="PutNot" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putNot"></a>

```go
func PutNot(value ConsumptionBudgetManagementGroupFilterNot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList">ConsumptionBudgetManagementGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference">ConsumptionBudgetManagementGroupFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList">ConsumptionBudgetManagementGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimension"></a>

```go
func Dimension() ConsumptionBudgetManagementGroupFilterDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList">ConsumptionBudgetManagementGroupFilterDimensionList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.not"></a>

```go
func Not() ConsumptionBudgetManagementGroupFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference">ConsumptionBudgetManagementGroupFilterNotOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tag"></a>

```go
func Tag() ConsumptionBudgetManagementGroupFilterTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList">ConsumptionBudgetManagementGroupFilterTagList</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() interface{}
```

- *Type:* interface{}

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.notInput"></a>

```go
func NotInput() ConsumptionBudgetManagementGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetManagementGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

---


### ConsumptionBudgetManagementGroupFilterTagList <a name="ConsumptionBudgetManagementGroupFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetManagementGroupFilterTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetManagementGroupFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupFilterTagOutputReference <a name="ConsumptionBudgetManagementGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupFilterTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetManagementGroupFilterTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupNotificationList <a name="ConsumptionBudgetManagementGroupNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetManagementGroupNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetManagementGroupNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupNotificationOutputReference <a name="ConsumptionBudgetManagementGroupNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetManagementGroupNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetThresholdType"></a>

```go
func ResetThresholdType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmailsInput"></a>

```go
func ContactEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmails"></a>

```go
func ContactEmails() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupTimeoutsOutputReference <a name="ConsumptionBudgetManagementGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetManagementGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetManagementGroupTimePeriodOutputReference <a name="ConsumptionBudgetManagementGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/consumptionbudgetmanagementgroup"

consumptionbudgetmanagementgroup.NewConsumptionBudgetManagementGroupTimePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetManagementGroupTimePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetManagementGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

---



