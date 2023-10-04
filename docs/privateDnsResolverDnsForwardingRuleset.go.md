# `azurerm_private_dns_resolver_dns_forwarding_ruleset`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_resolver_dns_forwarding_ruleset`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset).

# `privateDnsResolverDnsForwardingRuleset` Submodule <a name="`privateDnsResolverDnsForwardingRuleset` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverDnsForwardingRuleset <a name="PrivateDnsResolverDnsForwardingRuleset" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset azurerm_private_dns_resolver_dns_forwarding_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

privatednsresolverdnsforwardingruleset.NewPrivateDnsResolverDnsForwardingRuleset(scope Construct, id *string, config PrivateDnsResolverDnsForwardingRulesetConfig) PrivateDnsResolverDnsForwardingRuleset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig">PrivateDnsResolverDnsForwardingRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig">PrivateDnsResolverDnsForwardingRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts"></a>

```go
func PutTimeouts(value PrivateDnsResolverDnsForwardingRulesetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

privatednsresolverdnsforwardingruleset.PrivateDnsResolverDnsForwardingRuleset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

privatednsresolverdnsforwardingruleset.PrivateDnsResolverDnsForwardingRuleset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

privatednsresolverdnsforwardingruleset.PrivateDnsResolverDnsForwardingRuleset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput">PrivateDnsResolverOutboundEndpointIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds">PrivateDnsResolverOutboundEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts"></a>

```go
func Timeouts() PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverOutboundEndpointIdsInput`<sup>Optional</sup> <a name="PrivateDnsResolverOutboundEndpointIdsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput"></a>

```go
func PrivateDnsResolverOutboundEndpointIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="PrivateDnsResolverOutboundEndpointIds" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds"></a>

```go
func PrivateDnsResolverOutboundEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverDnsForwardingRulesetConfig <a name="PrivateDnsResolverDnsForwardingRulesetConfig" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

&privatednsresolverdnsforwardingruleset.PrivateDnsResolverDnsForwardingRulesetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	PrivateDnsResolverOutboundEndpointIds: *[]*string,
	ResourceGroupName: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds">PrivateDnsResolverOutboundEndpointIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `PrivateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="PrivateDnsResolverOutboundEndpointIds" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds"></a>

```go
PrivateDnsResolverOutboundEndpointIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts"></a>

```go
Timeouts PrivateDnsResolverDnsForwardingRulesetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#timeouts PrivateDnsResolverDnsForwardingRuleset#timeouts}

---

### PrivateDnsResolverDnsForwardingRulesetTimeouts <a name="PrivateDnsResolverDnsForwardingRulesetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

&privatednsresolverdnsforwardingruleset.PrivateDnsResolverDnsForwardingRulesetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference <a name="PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/privatednsresolverdnsforwardingruleset"

privatednsresolverdnsforwardingruleset.NewPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



