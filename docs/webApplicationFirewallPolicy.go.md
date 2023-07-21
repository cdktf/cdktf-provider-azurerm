# `azurerm_web_application_firewall_policy`

Refer to the Terraform Registory for docs: [`azurerm_web_application_firewall_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy).

# `webApplicationFirewallPolicy` Submodule <a name="`webApplicationFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebApplicationFirewallPolicy <a name="WebApplicationFirewallPolicy" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy azurerm_web_application_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicy(scope Construct, id *string, config WebApplicationFirewallPolicyConfig) WebApplicationFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig">WebApplicationFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig">WebApplicationFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules">PutCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules">PutManagedRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings">PutPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetCustomRules">ResetCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetPolicySettings">ResetPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomRules` <a name="PutCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules"></a>

```go
func PutCustomRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedRules` <a name="PutManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules"></a>

```go
func PutManagedRules(value WebApplicationFirewallPolicyManagedRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---

##### `PutPolicySettings` <a name="PutPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings"></a>

```go
func PutPolicySettings(value WebApplicationFirewallPolicyPolicySettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts"></a>

```go
func PutTimeouts(value WebApplicationFirewallPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>

---

##### `ResetCustomRules` <a name="ResetCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetCustomRules"></a>

```go
func ResetCustomRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicySettings` <a name="ResetPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetPolicySettings"></a>

```go
func ResetPolicySettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.WebApplicationFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.WebApplicationFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.WebApplicationFirewallPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRules">CustomRules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList">WebApplicationFirewallPolicyCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.httpListenerIds">HttpListenerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRules">ManagedRules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference">WebApplicationFirewallPolicyManagedRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.pathBasedRuleIds">PathBasedRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettings">PolicySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference">WebApplicationFirewallPolicyPolicySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference">WebApplicationFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRulesInput">CustomRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRulesInput">ManagedRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettingsInput">PolicySettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomRules`<sup>Required</sup> <a name="CustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRules"></a>

```go
func CustomRules() WebApplicationFirewallPolicyCustomRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList">WebApplicationFirewallPolicyCustomRulesList</a>

---

##### `HttpListenerIds`<sup>Required</sup> <a name="HttpListenerIds" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.httpListenerIds"></a>

```go
func HttpListenerIds() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedRules`<sup>Required</sup> <a name="ManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRules"></a>

```go
func ManagedRules() WebApplicationFirewallPolicyManagedRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference">WebApplicationFirewallPolicyManagedRulesOutputReference</a>

---

##### `PathBasedRuleIds`<sup>Required</sup> <a name="PathBasedRuleIds" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.pathBasedRuleIds"></a>

```go
func PathBasedRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `PolicySettings`<sup>Required</sup> <a name="PolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettings"></a>

```go
func PolicySettings() WebApplicationFirewallPolicyPolicySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference">WebApplicationFirewallPolicyPolicySettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeouts"></a>

```go
func Timeouts() WebApplicationFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference">WebApplicationFirewallPolicyTimeoutsOutputReference</a>

---

##### `CustomRulesInput`<sup>Optional</sup> <a name="CustomRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRulesInput"></a>

```go
func CustomRulesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedRulesInput`<sup>Optional</sup> <a name="ManagedRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRulesInput"></a>

```go
func ManagedRulesInput() WebApplicationFirewallPolicyManagedRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicySettingsInput`<sup>Optional</sup> <a name="PolicySettingsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettingsInput"></a>

```go
func PolicySettingsInput() WebApplicationFirewallPolicyPolicySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebApplicationFirewallPolicyConfig <a name="WebApplicationFirewallPolicyConfig" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagedRules: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules,
	Name: *string,
	ResourceGroupName: *string,
	CustomRules: interface{},
	Id: *string,
	PolicySettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.managedRules">ManagedRules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | managed_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.customRules">CustomRules</a></code> | <code>interface{}</code> | custom_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.policySettings">PolicySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | policy_settings block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}.

---

##### `ManagedRules`<sup>Required</sup> <a name="ManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.managedRules"></a>

```go
ManagedRules WebApplicationFirewallPolicyManagedRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

managed_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#managed_rules WebApplicationFirewallPolicy#managed_rules}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}.

---

##### `CustomRules`<sup>Optional</sup> <a name="CustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.customRules"></a>

```go
CustomRules interface{}
```

- *Type:* interface{}

custom_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#custom_rules WebApplicationFirewallPolicy#custom_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicySettings`<sup>Optional</sup> <a name="PolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.policySettings"></a>

```go
PolicySettings WebApplicationFirewallPolicyPolicySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

policy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#policy_settings WebApplicationFirewallPolicy#policy_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.timeouts"></a>

```go
Timeouts WebApplicationFirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#timeouts WebApplicationFirewallPolicy#timeouts}

---

### WebApplicationFirewallPolicyCustomRules <a name="WebApplicationFirewallPolicyCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyCustomRules {
	Action: *string,
	MatchConditions: interface{},
	Priority: *f64,
	RuleType: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.matchConditions">MatchConditions</a></code> | <code>interface{}</code> | match_conditions block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.ruleType">RuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}.

---

##### `MatchConditions`<sup>Required</sup> <a name="MatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.matchConditions"></a>

```go
MatchConditions interface{}
```

- *Type:* interface{}

match_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#match_conditions WebApplicationFirewallPolicy#match_conditions}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}.

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

### WebApplicationFirewallPolicyCustomRulesMatchConditions <a name="WebApplicationFirewallPolicyCustomRulesMatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions {
	MatchVariables: interface{},
	Operator: *string,
	MatchValues: *[]*string,
	NegationCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchVariables">MatchVariables</a></code> | <code>interface{}</code> | match_variables block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.negationCondition">NegationCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}. |

---

##### `MatchVariables`<sup>Required</sup> <a name="MatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchVariables"></a>

```go
MatchVariables interface{}
```

- *Type:* interface{}

match_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#match_variables WebApplicationFirewallPolicy#match_variables}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}.

---

##### `NegationCondition`<sup>Optional</sup> <a name="NegationCondition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.negationCondition"></a>

```go
NegationCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}.

---

### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables {
	VariableName: *string,
	Selector: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.variableName">VariableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.selector">Selector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}. |

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.variableName"></a>

```go
VariableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}.

---

### WebApplicationFirewallPolicyManagedRules <a name="WebApplicationFirewallPolicyManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRules {
	ManagedRuleSet: interface{},
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.managedRuleSet">ManagedRuleSet</a></code> | <code>interface{}</code> | managed_rule_set block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `ManagedRuleSet`<sup>Required</sup> <a name="ManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.managedRuleSet"></a>

```go
ManagedRuleSet interface{}
```

- *Type:* interface{}

managed_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#managed_rule_set WebApplicationFirewallPolicy#managed_rule_set}

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#exclusion WebApplicationFirewallPolicy#exclusion}

---

### WebApplicationFirewallPolicyManagedRulesExclusion <a name="WebApplicationFirewallPolicyManagedRulesExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRulesExclusion {
	MatchVariable: *string,
	Selector: *string,
	SelectorMatchOperator: *string,
	ExcludedRuleSet: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.matchVariable">MatchVariable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selector">Selector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selectorMatchOperator">SelectorMatchOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.excludedRuleSet">ExcludedRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | excluded_rule_set block. |

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.matchVariable"></a>

```go
MatchVariable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}.

---

##### `SelectorMatchOperator`<sup>Required</sup> <a name="SelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selectorMatchOperator"></a>

```go
SelectorMatchOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}.

---

##### `ExcludedRuleSet`<sup>Optional</sup> <a name="ExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.excludedRuleSet"></a>

```go
ExcludedRuleSet WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

excluded_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#excluded_rule_set WebApplicationFirewallPolicy#excluded_rule_set}

---

### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet {
	RuleGroup: interface{},
	Type: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.ruleGroup">RuleGroup</a></code> | <code>interface{}</code> | rule_group block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}. |

---

##### `RuleGroup`<sup>Optional</sup> <a name="RuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.ruleGroup"></a>

```go
RuleGroup interface{}
```

- *Type:* interface{}

rule_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_group WebApplicationFirewallPolicy#rule_group}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup {
	RuleGroupName: *string,
	ExcludedRules: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.ruleGroupName">RuleGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.excludedRules">ExcludedRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}. |

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.ruleGroupName"></a>

```go
RuleGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}.

---

##### `ExcludedRules`<sup>Optional</sup> <a name="ExcludedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.excludedRules"></a>

```go
ExcludedRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}.

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSet <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet {
	Version: *string,
	RuleGroupOverride: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.ruleGroupOverride">RuleGroupOverride</a></code> | <code>interface{}</code> | rule_group_override block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

##### `RuleGroupOverride`<sup>Optional</sup> <a name="RuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.ruleGroupOverride"></a>

```go
RuleGroupOverride interface{}
```

- *Type:* interface{}

rule_group_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_group_override WebApplicationFirewallPolicy#rule_group_override}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride {
	RuleGroupName: *string,
	DisabledRules: *[]*string,
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.ruleGroupName">RuleGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.disabledRules">DisabledRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#disabled_rules WebApplicationFirewallPolicy#disabled_rules}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.ruleGroupName"></a>

```go
RuleGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}.

---

##### `DisabledRules`<sup>Optional</sup> <a name="DisabledRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.disabledRules"></a>

```go
DisabledRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#disabled_rules WebApplicationFirewallPolicy#disabled_rules}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule {
	Id: *string,
	Action: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

### WebApplicationFirewallPolicyPolicySettings <a name="WebApplicationFirewallPolicyPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyPolicySettings {
	Enabled: interface{},
	FileUploadLimitInMb: *f64,
	MaxRequestBodySizeInKb: *f64,
	Mode: *string,
	RequestBodyCheck: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadLimitInMb">FileUploadLimitInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.maxRequestBodySizeInKb">MaxRequestBodySizeInKb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyCheck">RequestBodyCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `FileUploadLimitInMb`<sup>Optional</sup> <a name="FileUploadLimitInMb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadLimitInMb"></a>

```go
FileUploadLimitInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}.

---

##### `MaxRequestBodySizeInKb`<sup>Optional</sup> <a name="MaxRequestBodySizeInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.maxRequestBodySizeInKb"></a>

```go
MaxRequestBodySizeInKb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}.

---

##### `RequestBodyCheck`<sup>Optional</sup> <a name="RequestBodyCheck" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyCheck"></a>

```go
RequestBodyCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}.

---

### WebApplicationFirewallPolicyTimeouts <a name="WebApplicationFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

&webapplicationfirewallpolicy.WebApplicationFirewallPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebApplicationFirewallPolicyCustomRulesList <a name="WebApplicationFirewallPolicyCustomRulesList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyCustomRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyCustomRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsList <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyCustomRulesMatchConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyCustomRulesMatchConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resetSelector"></a>

```go
func ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableNameInput">VariableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableName">VariableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableNameInput"></a>

```go
func VariableNameInput() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableName"></a>

```go
func VariableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables">PutMatchVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetNegationCondition">ResetNegationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchVariables` <a name="PutMatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables"></a>

```go
func PutMatchVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegationCondition` <a name="ResetNegationCondition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetNegationCondition"></a>

```go
func ResetNegationCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariables">MatchVariables</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariablesInput">MatchVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationConditionInput">NegationConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationCondition">NegationCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchVariables`<sup>Required</sup> <a name="MatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariables"></a>

```go
func MatchVariables() WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList</a>

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchVariablesInput`<sup>Optional</sup> <a name="MatchVariablesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariablesInput"></a>

```go
func MatchVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `NegationConditionInput`<sup>Optional</sup> <a name="NegationConditionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationConditionInput"></a>

```go
func NegationConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegationCondition`<sup>Required</sup> <a name="NegationCondition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationCondition"></a>

```go
func NegationCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyCustomRulesOutputReference <a name="WebApplicationFirewallPolicyCustomRulesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyCustomRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyCustomRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions">PutMatchConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchConditions` <a name="PutMatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions"></a>

```go
func PutMatchConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditions">MatchConditions</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList">WebApplicationFirewallPolicyCustomRulesMatchConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditionsInput">MatchConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchConditions`<sup>Required</sup> <a name="MatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditions"></a>

```go
func MatchConditions() WebApplicationFirewallPolicyCustomRulesMatchConditionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList">WebApplicationFirewallPolicyCustomRulesMatchConditionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `MatchConditionsInput`<sup>Optional</sup> <a name="MatchConditionsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditionsInput"></a>

```go
func MatchConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup">PutRuleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetRuleGroup">ResetRuleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleGroup` <a name="PutRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup"></a>

```go
func PutRuleGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRuleGroup` <a name="ResetRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetRuleGroup"></a>

```go
func ResetRuleGroup()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroup">RuleGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroupInput">RuleGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleGroup`<sup>Required</sup> <a name="RuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroup"></a>

```go
func RuleGroup() WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList</a>

---

##### `RuleGroupInput`<sup>Optional</sup> <a name="RuleGroupInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroupInput"></a>

```go
func RuleGroupInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.internalValue"></a>

```go
func InternalValue() WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resetExcludedRules">ResetExcludedRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedRules` <a name="ResetExcludedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resetExcludedRules"></a>

```go
func ResetExcludedRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRulesInput">ExcludedRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupNameInput">RuleGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRules">ExcludedRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupName">RuleGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedRulesInput`<sup>Optional</sup> <a name="ExcludedRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRulesInput"></a>

```go
func ExcludedRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleGroupNameInput`<sup>Optional</sup> <a name="RuleGroupNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupNameInput"></a>

```go
func RuleGroupNameInput() *string
```

- *Type:* *string

---

##### `ExcludedRules`<sup>Required</sup> <a name="ExcludedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRules"></a>

```go
func ExcludedRules() *[]*string
```

- *Type:* *[]*string

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupName"></a>

```go
func RuleGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesExclusionList <a name="WebApplicationFirewallPolicyManagedRulesExclusionList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesExclusionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyManagedRulesExclusionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyManagedRulesExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesExclusionOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesExclusionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyManagedRulesExclusionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet">PutExcludedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resetExcludedRuleSet">ResetExcludedRuleSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedRuleSet` <a name="PutExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet"></a>

```go
func PutExcludedRuleSet(value WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---

##### `ResetExcludedRuleSet` <a name="ResetExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resetExcludedRuleSet"></a>

```go
func ResetExcludedRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSet">ExcludedRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSetInput">ExcludedRuleSetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariableInput">MatchVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperatorInput">SelectorMatchOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariable">MatchVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperator">SelectorMatchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedRuleSet`<sup>Required</sup> <a name="ExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSet"></a>

```go
func ExcludedRuleSet() WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference</a>

---

##### `ExcludedRuleSetInput`<sup>Optional</sup> <a name="ExcludedRuleSetInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSetInput"></a>

```go
func ExcludedRuleSetInput() WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---

##### `MatchVariableInput`<sup>Optional</sup> <a name="MatchVariableInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariableInput"></a>

```go
func MatchVariableInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `SelectorMatchOperatorInput`<sup>Optional</sup> <a name="SelectorMatchOperatorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperatorInput"></a>

```go
func SelectorMatchOperatorInput() *string
```

- *Type:* *string

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariable"></a>

```go
func MatchVariable() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `SelectorMatchOperator`<sup>Required</sup> <a name="SelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperator"></a>

```go
func SelectorMatchOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesManagedRuleSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyManagedRulesManagedRuleSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride">PutRuleGroupOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetRuleGroupOverride">ResetRuleGroupOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleGroupOverride` <a name="PutRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride"></a>

```go
func PutRuleGroupOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRuleGroupOverride` <a name="ResetRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetRuleGroupOverride"></a>

```go
func ResetRuleGroupOverride()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverride">RuleGroupOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverrideInput">RuleGroupOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleGroupOverride`<sup>Required</sup> <a name="RuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverride"></a>

```go
func RuleGroupOverride() WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList</a>

---

##### `RuleGroupOverrideInput`<sup>Optional</sup> <a name="RuleGroupOverrideInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverrideInput"></a>

```go
func RuleGroupOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetDisabledRules">ResetDisabledRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisabledRules` <a name="ResetDisabledRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetDisabledRules"></a>

```go
func ResetDisabledRules()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRulesInput">DisabledRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupNameInput">RuleGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRules">DisabledRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupName">RuleGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.rule"></a>

```go
func Rule() WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList</a>

---

##### `DisabledRulesInput`<sup>Optional</sup> <a name="DisabledRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRulesInput"></a>

```go
func DisabledRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleGroupNameInput`<sup>Optional</sup> <a name="RuleGroupNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupNameInput"></a>

```go
func RuleGroupNameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledRules`<sup>Required</sup> <a name="DisabledRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRules"></a>

```go
func DisabledRules() *[]*string
```

- *Type:* *[]*string

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupName"></a>

```go
func RuleGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get"></a>

```go
func Get(index *f64) WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebApplicationFirewallPolicyManagedRulesOutputReference <a name="WebApplicationFirewallPolicyManagedRulesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyManagedRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebApplicationFirewallPolicyManagedRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet">PutManagedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedRuleSet` <a name="PutManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet"></a>

```go
func PutManagedRuleSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList">WebApplicationFirewallPolicyManagedRulesExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSet">ManagedRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSetInput">ManagedRuleSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusion"></a>

```go
func Exclusion() WebApplicationFirewallPolicyManagedRulesExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList">WebApplicationFirewallPolicyManagedRulesExclusionList</a>

---

##### `ManagedRuleSet`<sup>Required</sup> <a name="ManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSet"></a>

```go
func ManagedRuleSet() WebApplicationFirewallPolicyManagedRulesManagedRuleSetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedRuleSetInput`<sup>Optional</sup> <a name="ManagedRuleSetInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSetInput"></a>

```go
func ManagedRuleSetInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() WebApplicationFirewallPolicyManagedRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---


### WebApplicationFirewallPolicyPolicySettingsOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyPolicySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebApplicationFirewallPolicyPolicySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadLimitInMb">ResetFileUploadLimitInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMaxRequestBodySizeInKb">ResetMaxRequestBodySizeInKb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyCheck">ResetRequestBodyCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFileUploadLimitInMb` <a name="ResetFileUploadLimitInMb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadLimitInMb"></a>

```go
func ResetFileUploadLimitInMb()
```

##### `ResetMaxRequestBodySizeInKb` <a name="ResetMaxRequestBodySizeInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMaxRequestBodySizeInKb"></a>

```go
func ResetMaxRequestBodySizeInKb()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetRequestBodyCheck` <a name="ResetRequestBodyCheck" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyCheck"></a>

```go
func ResetRequestBodyCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMbInput">FileUploadLimitInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKbInput">MaxRequestBodySizeInKbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheckInput">RequestBodyCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMb">FileUploadLimitInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKb">MaxRequestBodySizeInKb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheck">RequestBodyCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FileUploadLimitInMbInput`<sup>Optional</sup> <a name="FileUploadLimitInMbInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMbInput"></a>

```go
func FileUploadLimitInMbInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestBodySizeInKbInput`<sup>Optional</sup> <a name="MaxRequestBodySizeInKbInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKbInput"></a>

```go
func MaxRequestBodySizeInKbInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RequestBodyCheckInput`<sup>Optional</sup> <a name="RequestBodyCheckInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheckInput"></a>

```go
func RequestBodyCheckInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FileUploadLimitInMb`<sup>Required</sup> <a name="FileUploadLimitInMb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMb"></a>

```go
func FileUploadLimitInMb() *f64
```

- *Type:* *f64

---

##### `MaxRequestBodySizeInKb`<sup>Required</sup> <a name="MaxRequestBodySizeInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKb"></a>

```go
func MaxRequestBodySizeInKb() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RequestBodyCheck`<sup>Required</sup> <a name="RequestBodyCheck" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheck"></a>

```go
func RequestBodyCheck() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WebApplicationFirewallPolicyPolicySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---


### WebApplicationFirewallPolicyTimeoutsOutputReference <a name="WebApplicationFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapplicationfirewallpolicy"

webapplicationfirewallpolicy.NewWebApplicationFirewallPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebApplicationFirewallPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



