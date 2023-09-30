# `azurerm_consumption_budget_resource_group`

Refer to the Terraform Registory for docs: [`azurerm_consumption_budget_resource_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group).

# `consumptionBudgetResourceGroup` Submodule <a name="`consumptionBudgetResourceGroup` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetResourceGroup <a name="ConsumptionBudgetResourceGroup" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroup(scope Construct, id *string, config ConsumptionBudgetResourceGroupConfig) ConsumptionBudgetResourceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig">ConsumptionBudgetResourceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig">ConsumptionBudgetResourceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeGrain">ResetTimeGrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter"></a>

```go
func PutFilter(value ConsumptionBudgetResourceGroupFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts"></a>

```go
func PutTimeouts(value ConsumptionBudgetResourceGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod"></a>

```go
func PutTimePeriod(value ConsumptionBudgetResourceGroupTimePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeGrain` <a name="ResetTimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeGrain"></a>

```go
func ResetTimeGrain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference">ConsumptionBudgetResourceGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList">ConsumptionBudgetResourceGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference">ConsumptionBudgetResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference">ConsumptionBudgetResourceGroupTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrainInput">TimeGrainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrain">TimeGrain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filter"></a>

```go
func Filter() ConsumptionBudgetResourceGroupFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference">ConsumptionBudgetResourceGroupFilterOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notification"></a>

```go
func Notification() ConsumptionBudgetResourceGroupNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList">ConsumptionBudgetResourceGroupNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeouts"></a>

```go
func Timeouts() ConsumptionBudgetResourceGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference">ConsumptionBudgetResourceGroupTimeoutsOutputReference</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriod"></a>

```go
func TimePeriod() ConsumptionBudgetResourceGroupTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference">ConsumptionBudgetResourceGroupTimePeriodOutputReference</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filterInput"></a>

```go
func FilterInput() ConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupIdInput"></a>

```go
func ResourceGroupIdInput() *string
```

- *Type:* *string

---

##### `TimeGrainInput`<sup>Optional</sup> <a name="TimeGrainInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrainInput"></a>

```go
func TimeGrainInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriodInput"></a>

```go
func TimePeriodInput() ConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupId"></a>

```go
func ResourceGroupId() *string
```

- *Type:* *string

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrain"></a>

```go
func TimeGrain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetResourceGroupConfig <a name="ConsumptionBudgetResourceGroupConfig" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupConfig {
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
	ResourceGroupId: *string,
	TimePeriod: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod,
	Etag: *string,
	Filter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter,
	Id: *string,
	TimeGrain: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.amount">Amount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeGrain">TimeGrain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#notification ConsumptionBudgetResourceGroup#notification}

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.resourceGroupId"></a>

```go
ResourceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timePeriod"></a>

```go
TimePeriod ConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#time_period ConsumptionBudgetResourceGroup#time_period}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.filter"></a>

```go
Filter ConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#filter ConsumptionBudgetResourceGroup#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGrain`<sup>Optional</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeGrain"></a>

```go
TimeGrain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeouts"></a>

```go
Timeouts ConsumptionBudgetResourceGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#timeouts ConsumptionBudgetResourceGroup#timeouts}

---

### ConsumptionBudgetResourceGroupFilter <a name="ConsumptionBudgetResourceGroupFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupFilter {
	Dimension: interface{},
	Not: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot,
	Tag: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.dimension">Dimension</a></code> | <code>interface{}</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.dimension"></a>

```go
Dimension interface{}
```

- *Type:* interface{}

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.not"></a>

```go
Not ConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#not ConsumptionBudgetResourceGroup#not}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

### ConsumptionBudgetResourceGroupFilterDimension <a name="ConsumptionBudgetResourceGroupFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupFilterDimension {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterNot <a name="ConsumptionBudgetResourceGroupFilterNot" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupFilterNot {
	Dimension: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension,
	Tag: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a></code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.dimension"></a>

```go
Dimension ConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.tag"></a>

```go
Tag ConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

### ConsumptionBudgetResourceGroupFilterNotDimension <a name="ConsumptionBudgetResourceGroupFilterNotDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupFilterNotDimension {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterNotTag <a name="ConsumptionBudgetResourceGroupFilterNotTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupFilterNotTag {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterTag <a name="ConsumptionBudgetResourceGroupFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupFilterTag {
	Name: *string,
	Values: *[]*string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupNotification <a name="ConsumptionBudgetResourceGroupNotification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupNotification {
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
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactGroups">ContactGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactRoles">ContactRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}.

---

##### `ContactEmails`<sup>Optional</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactEmails"></a>

```go
ContactEmails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}.

---

##### `ContactGroups`<sup>Optional</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactGroups"></a>

```go
ContactGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}.

---

##### `ContactRoles`<sup>Optional</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactRoles"></a>

```go
ContactRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}.

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}.

---

### ConsumptionBudgetResourceGroupTimeouts <a name="ConsumptionBudgetResourceGroupTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}.

---

### ConsumptionBudgetResourceGroupTimePeriod <a name="ConsumptionBudgetResourceGroupTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

&consumptionbudgetresourcegroup.ConsumptionBudgetResourceGroupTimePeriod {
	StartDate: *string,
	EndDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.startDate">StartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetResourceGroupFilterDimensionList <a name="ConsumptionBudgetResourceGroupFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetResourceGroupFilterDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetResourceGroupFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupFilterDimensionOutputReference <a name="ConsumptionBudgetResourceGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetResourceGroupFilterDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference <a name="ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterNotDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

---


### ConsumptionBudgetResourceGroupFilterNotOutputReference <a name="ConsumptionBudgetResourceGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetResourceGroupFilterNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension"></a>

```go
func PutDimension(value ConsumptionBudgetResourceGroupFilterNotDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag"></a>

```go
func PutTag(value ConsumptionBudgetResourceGroupFilterNotTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference">ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference">ConsumptionBudgetResourceGroupFilterNotTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tagInput">TagInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension"></a>

```go
func Dimension() ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference">ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag"></a>

```go
func Tag() ConsumptionBudgetResourceGroupFilterNotTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference">ConsumptionBudgetResourceGroupFilterNotTagOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() ConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tagInput"></a>

```go
func TagInput() ConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

---


### ConsumptionBudgetResourceGroupFilterNotTagOutputReference <a name="ConsumptionBudgetResourceGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterNotTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetResourceGroupFilterNotTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

---


### ConsumptionBudgetResourceGroupFilterOutputReference <a name="ConsumptionBudgetResourceGroupFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetResourceGroupFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension"></a>

```go
func PutDimension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNot` <a name="PutNot" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot"></a>

```go
func PutNot(value ConsumptionBudgetResourceGroupFilterNot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList">ConsumptionBudgetResourceGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference">ConsumptionBudgetResourceGroupFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList">ConsumptionBudgetResourceGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimension"></a>

```go
func Dimension() ConsumptionBudgetResourceGroupFilterDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList">ConsumptionBudgetResourceGroupFilterDimensionList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.not"></a>

```go
func Not() ConsumptionBudgetResourceGroupFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference">ConsumptionBudgetResourceGroupFilterNotOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tag"></a>

```go
func Tag() ConsumptionBudgetResourceGroupFilterTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList">ConsumptionBudgetResourceGroupFilterTagList</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() interface{}
```

- *Type:* interface{}

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.notInput"></a>

```go
func NotInput() ConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---


### ConsumptionBudgetResourceGroupFilterTagList <a name="ConsumptionBudgetResourceGroupFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetResourceGroupFilterTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetResourceGroupFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupFilterTagOutputReference <a name="ConsumptionBudgetResourceGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupFilterTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetResourceGroupFilterTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupNotificationList <a name="ConsumptionBudgetResourceGroupNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConsumptionBudgetResourceGroupNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get"></a>

```go
func Get(index *f64) ConsumptionBudgetResourceGroupNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupNotificationOutputReference <a name="ConsumptionBudgetResourceGroupNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConsumptionBudgetResourceGroupNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactEmails">ResetContactEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactGroups">ResetContactGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactRoles">ResetContactRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactEmails` <a name="ResetContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactEmails"></a>

```go
func ResetContactEmails()
```

##### `ResetContactGroups` <a name="ResetContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactGroups"></a>

```go
func ResetContactGroups()
```

##### `ResetContactRoles` <a name="ResetContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactRoles"></a>

```go
func ResetContactRoles()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetThresholdType"></a>

```go
func ResetThresholdType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroupsInput">ContactGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRolesInput">ContactRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups">ContactGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles">ContactRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmailsInput"></a>

```go
func ContactEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContactGroupsInput`<sup>Optional</sup> <a name="ContactGroupsInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroupsInput"></a>

```go
func ContactGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContactRolesInput`<sup>Optional</sup> <a name="ContactRolesInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRolesInput"></a>

```go
func ContactRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails"></a>

```go
func ContactEmails() *[]*string
```

- *Type:* *[]*string

---

##### `ContactGroups`<sup>Required</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups"></a>

```go
func ContactGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ContactRoles`<sup>Required</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles"></a>

```go
func ContactRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupTimeoutsOutputReference <a name="ConsumptionBudgetResourceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetResourceGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConsumptionBudgetResourceGroupTimePeriodOutputReference <a name="ConsumptionBudgetResourceGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/consumptionbudgetresourcegroup"

consumptionbudgetresourcegroup.NewConsumptionBudgetResourceGroupTimePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConsumptionBudgetResourceGroupTimePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() ConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---



