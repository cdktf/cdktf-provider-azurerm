# `azurerm_firewall_nat_rule_collection`

Refer to the Terraform Registory for docs: [`azurerm_firewall_nat_rule_collection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection).

# `firewallNatRuleCollection` Submodule <a name="`firewallNatRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallNatRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallNatRuleCollection <a name="FirewallNatRuleCollection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection azurerm_firewall_nat_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.NewFirewallNatRuleCollection(scope Construct, id *string, config FirewallNatRuleCollectionConfig) FirewallNatRuleCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig">FirewallNatRuleCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig">FirewallNatRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts"></a>

```go
func PutTimeouts(value FirewallNatRuleCollectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.FirewallNatRuleCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.FirewallNatRuleCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.FirewallNatRuleCollection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList">FirewallNatRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference">FirewallNatRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallNameInput">AzureFirewallNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallName">AzureFirewallName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.rule"></a>

```go
func Rule() FirewallNatRuleCollectionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList">FirewallNatRuleCollectionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeouts"></a>

```go
func Timeouts() FirewallNatRuleCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference">FirewallNatRuleCollectionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `AzureFirewallNameInput`<sup>Optional</sup> <a name="AzureFirewallNameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallNameInput"></a>

```go
func AzureFirewallNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AzureFirewallName`<sup>Required</sup> <a name="AzureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.azureFirewallName"></a>

```go
func AzureFirewallName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallNatRuleCollectionConfig <a name="FirewallNatRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

&firewallnatrulecollection.FirewallNatRuleCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	AzureFirewallName: *string,
	Name: *string,
	Priority: *f64,
	ResourceGroupName: *string,
	Rule: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.azureFirewallName">AzureFirewallName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#action FirewallNatRuleCollection#action}.

---

##### `AzureFirewallName`<sup>Required</sup> <a name="AzureFirewallName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.azureFirewallName"></a>

```go
AzureFirewallName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#azure_firewall_name FirewallNatRuleCollection#azure_firewall_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#priority FirewallNatRuleCollection#priority}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#resource_group_name FirewallNatRuleCollection#resource_group_name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#rule FirewallNatRuleCollection#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#id FirewallNatRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionConfig.property.timeouts"></a>

```go
Timeouts FirewallNatRuleCollectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts">FirewallNatRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#timeouts FirewallNatRuleCollection#timeouts}

---

### FirewallNatRuleCollectionRule <a name="FirewallNatRuleCollectionRule" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

&firewallnatrulecollection.FirewallNatRuleCollectionRule {
	DestinationAddresses: *[]*string,
	DestinationPorts: *[]*string,
	Name: *string,
	Protocols: *[]*string,
	TranslatedAddress: *string,
	TranslatedPort: *string,
	Description: *string,
	SourceAddresses: *[]*string,
	SourceIpGroups: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedAddress">TranslatedAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedPort">TranslatedPort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceIpGroups">SourceIpGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}. |

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationAddresses"></a>

```go
DestinationAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#destination_addresses FirewallNatRuleCollection#destination_addresses}.

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#destination_ports FirewallNatRuleCollection#destination_ports}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#name FirewallNatRuleCollection#name}.

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#protocols FirewallNatRuleCollection#protocols}.

---

##### `TranslatedAddress`<sup>Required</sup> <a name="TranslatedAddress" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedAddress"></a>

```go
TranslatedAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#translated_address FirewallNatRuleCollection#translated_address}.

---

##### `TranslatedPort`<sup>Required</sup> <a name="TranslatedPort" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.translatedPort"></a>

```go
TranslatedPort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#translated_port FirewallNatRuleCollection#translated_port}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#description FirewallNatRuleCollection#description}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceAddresses"></a>

```go
SourceAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#source_addresses FirewallNatRuleCollection#source_addresses}.

---

##### `SourceIpGroups`<sup>Optional</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRule.property.sourceIpGroups"></a>

```go
SourceIpGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#source_ip_groups FirewallNatRuleCollection#source_ip_groups}.

---

### FirewallNatRuleCollectionTimeouts <a name="FirewallNatRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

&firewallnatrulecollection.FirewallNatRuleCollectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#create FirewallNatRuleCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#delete FirewallNatRuleCollection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#read FirewallNatRuleCollection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/firewall_nat_rule_collection#update FirewallNatRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallNatRuleCollectionRuleList <a name="FirewallNatRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.NewFirewallNatRuleCollectionRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirewallNatRuleCollectionRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get"></a>

```go
func Get(index *f64) FirewallNatRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallNatRuleCollectionRuleOutputReference <a name="FirewallNatRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.NewFirewallNatRuleCollectionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirewallNatRuleCollectionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceIpGroups">ResetSourceIpGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```go
func ResetSourceAddresses()
```

##### `ResetSourceIpGroups` <a name="ResetSourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```go
func ResetSourceIpGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">SourceIpGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddressInput">TranslatedAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPortInput">TranslatedPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroups">SourceIpGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddress">TranslatedAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPort">TranslatedPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```go
func DestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```go
func SourceAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIpGroupsInput`<sup>Optional</sup> <a name="SourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```go
func SourceIpGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TranslatedAddressInput`<sup>Optional</sup> <a name="TranslatedAddressInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddressInput"></a>

```go
func TranslatedAddressInput() *string
```

- *Type:* *string

---

##### `TranslatedPortInput`<sup>Optional</sup> <a name="TranslatedPortInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPortInput"></a>

```go
func TranslatedPortInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```go
func DestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```go
func SourceAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIpGroups`<sup>Required</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```go
func SourceIpGroups() *[]*string
```

- *Type:* *[]*string

---

##### `TranslatedAddress`<sup>Required</sup> <a name="TranslatedAddress" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedAddress"></a>

```go
func TranslatedAddress() *string
```

- *Type:* *string

---

##### `TranslatedPort`<sup>Required</sup> <a name="TranslatedPort" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.translatedPort"></a>

```go
func TranslatedPort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallNatRuleCollectionTimeoutsOutputReference <a name="FirewallNatRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/firewallnatrulecollection"

firewallnatrulecollection.NewFirewallNatRuleCollectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirewallNatRuleCollectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallNatRuleCollection.FirewallNatRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



