# `azurerm_site_recovery_services_vault_hyperv_site`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_services_vault_hyperv_site`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site).

# `siteRecoveryServicesVaultHypervSite` Submodule <a name="`siteRecoveryServicesVaultHypervSite` Submodule" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryServicesVaultHypervSite <a name="SiteRecoveryServicesVaultHypervSite" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site azurerm_site_recovery_services_vault_hyperv_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

siterecoveryservicesvaulthypervsite.NewSiteRecoveryServicesVaultHypervSite(scope Construct, id *string, config SiteRecoveryServicesVaultHypervSiteConfig) SiteRecoveryServicesVaultHypervSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig">SiteRecoveryServicesVaultHypervSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig">SiteRecoveryServicesVaultHypervSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.putTimeouts"></a>

```go
func PutTimeouts(value SiteRecoveryServicesVaultHypervSiteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

siterecoveryservicesvaulthypervsite.SiteRecoveryServicesVaultHypervSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

siterecoveryservicesvaulthypervsite.SiteRecoveryServicesVaultHypervSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

siterecoveryservicesvaulthypervsite.SiteRecoveryServicesVaultHypervSite_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference">SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultIdInput">RecoveryVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeouts"></a>

```go
func Timeouts() SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference">SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecoveryVaultIdInput`<sup>Optional</sup> <a name="RecoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultIdInput"></a>

```go
func RecoveryVaultIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultId"></a>

```go
func RecoveryVaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryServicesVaultHypervSiteConfig <a name="SiteRecoveryServicesVaultHypervSiteConfig" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

&siterecoveryservicesvaulthypervsite.SiteRecoveryServicesVaultHypervSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RecoveryVaultId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#name SiteRecoveryServicesVaultHypervSite#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#recovery_vault_id SiteRecoveryServicesVaultHypervSite#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#id SiteRecoveryServicesVaultHypervSite#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#name SiteRecoveryServicesVaultHypervSite#name}.

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.recoveryVaultId"></a>

```go
RecoveryVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#recovery_vault_id SiteRecoveryServicesVaultHypervSite#recovery_vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#id SiteRecoveryServicesVaultHypervSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.timeouts"></a>

```go
Timeouts SiteRecoveryServicesVaultHypervSiteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#timeouts SiteRecoveryServicesVaultHypervSite#timeouts}

---

### SiteRecoveryServicesVaultHypervSiteTimeouts <a name="SiteRecoveryServicesVaultHypervSiteTimeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

&siterecoveryservicesvaulthypervsite.SiteRecoveryServicesVaultHypervSiteTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#create SiteRecoveryServicesVaultHypervSite#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#delete SiteRecoveryServicesVaultHypervSite#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#read SiteRecoveryServicesVaultHypervSite#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#create SiteRecoveryServicesVaultHypervSite#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#delete SiteRecoveryServicesVaultHypervSite#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_services_vault_hyperv_site#read SiteRecoveryServicesVaultHypervSite#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference <a name="SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/siterecoveryservicesvaulthypervsite"

siterecoveryservicesvaulthypervsite.NewSiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



