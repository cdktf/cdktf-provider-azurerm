# `azurerm_servicebus_namespace_network_rule_set`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_namespace_network_rule_set`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set).

# `servicebusNamespaceNetworkRuleSet` Submodule <a name="`servicebusNamespaceNetworkRuleSet` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceNetworkRuleSet <a name="ServicebusNamespaceNetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set azurerm_servicebus_namespace_network_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.NewServicebusNamespaceNetworkRuleSet(scope Construct, id *string, config ServicebusNamespaceNetworkRuleSetConfig) ServicebusNamespaceNetworkRuleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig">ServicebusNamespaceNetworkRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig">ServicebusNamespaceNetworkRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules">PutNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetNetworkRules">ResetNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTrustedServicesAllowed">ResetTrustedServicesAllowed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNetworkRules` <a name="PutNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules"></a>

```go
func PutNetworkRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts"></a>

```go
func PutTimeouts(value ServicebusNamespaceNetworkRuleSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetDefaultAction"></a>

```go
func ResetDefaultAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetId"></a>

```go
func ResetId()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetIpRules"></a>

```go
func ResetIpRules()
```

##### `ResetNetworkRules` <a name="ResetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetNetworkRules"></a>

```go
func ResetNetworkRules()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrustedServicesAllowed` <a name="ResetTrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTrustedServicesAllowed"></a>

```go
func ResetTrustedServicesAllowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.ServicebusNamespaceNetworkRuleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.ServicebusNamespaceNetworkRuleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.ServicebusNamespaceNetworkRuleSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRules">NetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference">ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRulesInput">IpRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRulesInput">NetworkRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowedInput">TrustedServicesAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed">TrustedServicesAllowed</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkRules`<sup>Required</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRules"></a>

```go
func NetworkRules() ServicebusNamespaceNetworkRuleSetNetworkRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeouts"></a>

```go
func Timeouts() ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference">ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRulesInput"></a>

```go
func IpRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `NetworkRulesInput`<sup>Optional</sup> <a name="NetworkRulesInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRulesInput"></a>

```go
func NetworkRulesInput() interface{}
```

- *Type:* interface{}

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedServicesAllowedInput`<sup>Optional</sup> <a name="TrustedServicesAllowedInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowedInput"></a>

```go
func TrustedServicesAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRules"></a>

```go
func IpRules() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `TrustedServicesAllowed`<sup>Required</sup> <a name="TrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed"></a>

```go
func TrustedServicesAllowed() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceNetworkRuleSetConfig <a name="ServicebusNamespaceNetworkRuleSetConfig" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

&servicebusnamespacenetworkruleset.ServicebusNamespaceNetworkRuleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NamespaceId: *string,
	DefaultAction: *string,
	Id: *string,
	IpRules: *[]*string,
	NetworkRules: interface{},
	PublicNetworkAccessEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts,
	TrustedServicesAllowed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.networkRules">NetworkRules</a></code> | <code>interface{}</code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.trustedServicesAllowed">TrustedServicesAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}.

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.ipRules"></a>

```go
IpRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}.

---

##### `NetworkRules`<sup>Optional</sup> <a name="NetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.networkRules"></a>

```go
NetworkRules interface{}
```

- *Type:* interface{}

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#network_rules ServicebusNamespaceNetworkRuleSet#network_rules}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.timeouts"></a>

```go
Timeouts ServicebusNamespaceNetworkRuleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#timeouts ServicebusNamespaceNetworkRuleSet#timeouts}

---

##### `TrustedServicesAllowed`<sup>Optional</sup> <a name="TrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.trustedServicesAllowed"></a>

```go
TrustedServicesAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}.

---

### ServicebusNamespaceNetworkRuleSetNetworkRules <a name="ServicebusNamespaceNetworkRuleSetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

&servicebusnamespacenetworkruleset.ServicebusNamespaceNetworkRuleSetNetworkRules {
	SubnetId: *string,
	IgnoreMissingVnetServiceEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}.

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```go
IgnoreMissingVnetServiceEndpoint interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}.

---

### ServicebusNamespaceNetworkRuleSetTimeouts <a name="ServicebusNamespaceNetworkRuleSetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

&servicebusnamespacenetworkruleset.ServicebusNamespaceNetworkRuleSetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceNetworkRuleSetNetworkRulesList <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesList" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.NewServicebusNamespaceNetworkRuleSetNetworkRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicebusNamespaceNetworkRuleSetNetworkRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get"></a>

```go
func Get(index *f64) ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.NewServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">ResetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreMissingVnetServiceEndpoint` <a name="ResetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```go
func ResetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">IgnoreMissingVnetServiceEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```go
func IgnoreMissingVnetServiceEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```go
func IgnoreMissingVnetServiceEndpoint() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference <a name="ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespacenetworkruleset"

servicebusnamespacenetworkruleset.NewServicebusNamespaceNetworkRuleSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



