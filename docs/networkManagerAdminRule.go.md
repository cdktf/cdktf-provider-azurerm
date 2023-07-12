# `azurerm_network_manager_admin_rule`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_admin_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule).

# `networkManagerAdminRule` Submodule <a name="`networkManagerAdminRule` Submodule" id="@cdktf/provider-azurerm.networkManagerAdminRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerAdminRule <a name="NetworkManagerAdminRule" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule azurerm_network_manager_admin_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NewNetworkManagerAdminRule(scope Construct, id *string, config NetworkManagerAdminRuleConfig) NetworkManagerAdminRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig">NetworkManagerAdminRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig">NetworkManagerAdminRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestinationPortRanges">ResetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSourcePortRanges">ResetSourcePortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination"></a>

```go
func PutDestination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putDestination.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts"></a>

```go
func PutTimeouts(value NetworkManagerAdminRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetDestinationPortRanges` <a name="ResetDestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetDestinationPortRanges"></a>

```go
func ResetDestinationPortRanges()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetId"></a>

```go
func ResetId()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourcePortRanges` <a name="ResetSourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetSourcePortRanges"></a>

```go
func ResetSourcePortRanges()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NetworkManagerAdminRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NetworkManagerAdminRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NetworkManagerAdminRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList">NetworkManagerAdminRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList">NetworkManagerAdminRuleSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference">NetworkManagerAdminRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionIdInput">AdminRuleCollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRangesInput">DestinationPortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRangesInput">SourcePortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionId">AdminRuleCollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRanges">SourcePortRanges</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destination"></a>

```go
func Destination() NetworkManagerAdminRuleDestinationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList">NetworkManagerAdminRuleDestinationList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.source"></a>

```go
func Source() NetworkManagerAdminRuleSourceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList">NetworkManagerAdminRuleSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeouts"></a>

```go
func Timeouts() NetworkManagerAdminRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference">NetworkManagerAdminRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `AdminRuleCollectionIdInput`<sup>Optional</sup> <a name="AdminRuleCollectionIdInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionIdInput"></a>

```go
func AdminRuleCollectionIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationPortRangesInput`<sup>Optional</sup> <a name="DestinationPortRangesInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRangesInput"></a>

```go
func DestinationPortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `SourcePortRangesInput`<sup>Optional</sup> <a name="SourcePortRangesInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRangesInput"></a>

```go
func SourcePortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AdminRuleCollectionId`<sup>Required</sup> <a name="AdminRuleCollectionId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.adminRuleCollectionId"></a>

```go
func AdminRuleCollectionId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.destinationPortRanges"></a>

```go
func DestinationPortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.sourcePortRanges"></a>

```go
func SourcePortRanges() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerAdminRuleConfig <a name="NetworkManagerAdminRuleConfig" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

&networkmanageradminrule.NetworkManagerAdminRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	AdminRuleCollectionId: *string,
	Direction: *string,
	Name: *string,
	Priority: *f64,
	Protocol: *string,
	Description: *string,
	Destination: interface{},
	DestinationPortRanges: *[]*string,
	Id: *string,
	Source: interface{},
	SourcePortRanges: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#action NetworkManagerAdminRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.adminRuleCollectionId">AdminRuleCollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#admin_rule_collection_id NetworkManagerAdminRule#admin_rule_collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#direction NetworkManagerAdminRule#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#name NetworkManagerAdminRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#priority NetworkManagerAdminRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#protocol NetworkManagerAdminRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#description NetworkManagerAdminRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destination">Destination</a></code> | <code>interface{}</code> | destination block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#destination_port_ranges NetworkManagerAdminRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#id NetworkManagerAdminRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.sourcePortRanges">SourcePortRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#source_port_ranges NetworkManagerAdminRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#action NetworkManagerAdminRule#action}.

---

##### `AdminRuleCollectionId`<sup>Required</sup> <a name="AdminRuleCollectionId" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.adminRuleCollectionId"></a>

```go
AdminRuleCollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#admin_rule_collection_id NetworkManagerAdminRule#admin_rule_collection_id}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#direction NetworkManagerAdminRule#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#name NetworkManagerAdminRule#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#priority NetworkManagerAdminRule#priority}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#protocol NetworkManagerAdminRule#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#description NetworkManagerAdminRule#description}.

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destination"></a>

```go
Destination interface{}
```

- *Type:* interface{}

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#destination NetworkManagerAdminRule#destination}

---

##### `DestinationPortRanges`<sup>Optional</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.destinationPortRanges"></a>

```go
DestinationPortRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#destination_port_ranges NetworkManagerAdminRule#destination_port_ranges}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#id NetworkManagerAdminRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#source NetworkManagerAdminRule#source}

---

##### `SourcePortRanges`<sup>Optional</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.sourcePortRanges"></a>

```go
SourcePortRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#source_port_ranges NetworkManagerAdminRule#source_port_ranges}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleConfig.property.timeouts"></a>

```go
Timeouts NetworkManagerAdminRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts">NetworkManagerAdminRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#timeouts NetworkManagerAdminRule#timeouts}

---

### NetworkManagerAdminRuleDestination <a name="NetworkManagerAdminRuleDestination" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

&networkmanageradminrule.NetworkManagerAdminRuleDestination {
	AddressPrefix: *string,
	AddressPrefixType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefix">AddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefixType">AddressPrefixType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}. |

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefix"></a>

```go
AddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}.

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestination.property.addressPrefixType"></a>

```go
AddressPrefixType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}.

---

### NetworkManagerAdminRuleSource <a name="NetworkManagerAdminRuleSource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

&networkmanageradminrule.NetworkManagerAdminRuleSource {
	AddressPrefix: *string,
	AddressPrefixType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefix">AddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefixType">AddressPrefixType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}. |

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefix"></a>

```go
AddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix NetworkManagerAdminRule#address_prefix}.

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSource.property.addressPrefixType"></a>

```go
AddressPrefixType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#address_prefix_type NetworkManagerAdminRule#address_prefix_type}.

---

### NetworkManagerAdminRuleTimeouts <a name="NetworkManagerAdminRuleTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

&networkmanageradminrule.NetworkManagerAdminRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#create NetworkManagerAdminRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#delete NetworkManagerAdminRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#read NetworkManagerAdminRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#update NetworkManagerAdminRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#create NetworkManagerAdminRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#delete NetworkManagerAdminRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#read NetworkManagerAdminRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/network_manager_admin_rule#update NetworkManagerAdminRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerAdminRuleDestinationList <a name="NetworkManagerAdminRuleDestinationList" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NewNetworkManagerAdminRuleDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkManagerAdminRuleDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get"></a>

```go
func Get(index *f64) NetworkManagerAdminRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkManagerAdminRuleDestinationOutputReference <a name="NetworkManagerAdminRuleDestinationOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NewNetworkManagerAdminRuleDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkManagerAdminRuleDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixInput">AddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixTypeInput">AddressPrefixTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefix">AddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixType">AddressPrefixType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressPrefixInput`<sup>Optional</sup> <a name="AddressPrefixInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixInput"></a>

```go
func AddressPrefixInput() *string
```

- *Type:* *string

---

##### `AddressPrefixTypeInput`<sup>Optional</sup> <a name="AddressPrefixTypeInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixTypeInput"></a>

```go
func AddressPrefixTypeInput() *string
```

- *Type:* *string

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefix"></a>

```go
func AddressPrefix() *string
```

- *Type:* *string

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.addressPrefixType"></a>

```go
func AddressPrefixType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkManagerAdminRuleSourceList <a name="NetworkManagerAdminRuleSourceList" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NewNetworkManagerAdminRuleSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkManagerAdminRuleSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get"></a>

```go
func Get(index *f64) NetworkManagerAdminRuleSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkManagerAdminRuleSourceOutputReference <a name="NetworkManagerAdminRuleSourceOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NewNetworkManagerAdminRuleSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkManagerAdminRuleSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixInput">AddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixTypeInput">AddressPrefixTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefix">AddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixType">AddressPrefixType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressPrefixInput`<sup>Optional</sup> <a name="AddressPrefixInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixInput"></a>

```go
func AddressPrefixInput() *string
```

- *Type:* *string

---

##### `AddressPrefixTypeInput`<sup>Optional</sup> <a name="AddressPrefixTypeInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixTypeInput"></a>

```go
func AddressPrefixTypeInput() *string
```

- *Type:* *string

---

##### `AddressPrefix`<sup>Required</sup> <a name="AddressPrefix" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefix"></a>

```go
func AddressPrefix() *string
```

- *Type:* *string

---

##### `AddressPrefixType`<sup>Required</sup> <a name="AddressPrefixType" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.addressPrefixType"></a>

```go
func AddressPrefixType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkManagerAdminRuleTimeoutsOutputReference <a name="NetworkManagerAdminRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/networkmanageradminrule"

networkmanageradminrule.NewNetworkManagerAdminRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerAdminRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerAdminRule.NetworkManagerAdminRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



