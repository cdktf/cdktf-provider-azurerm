# `azurerm_network_manager_security_admin_configuration`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_security_admin_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration).

# `networkManagerSecurityAdminConfiguration` Submodule <a name="`networkManagerSecurityAdminConfiguration` Submodule" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerSecurityAdminConfiguration <a name="NetworkManagerSecurityAdminConfiguration" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration azurerm_network_manager_security_admin_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

networkmanagersecurityadminconfiguration.NewNetworkManagerSecurityAdminConfiguration(scope Construct, id *string, config NetworkManagerSecurityAdminConfigurationConfig) NetworkManagerSecurityAdminConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig">NetworkManagerSecurityAdminConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig">NetworkManagerSecurityAdminConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices">ResetApplyOnNetworkIntentPolicyBasedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value NetworkManagerSecurityAdminConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---

##### `ResetApplyOnNetworkIntentPolicyBasedServices` <a name="ResetApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices"></a>

```go
func ResetApplyOnNetworkIntentPolicyBasedServices()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

networkmanagersecurityadminconfiguration.NetworkManagerSecurityAdminConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

networkmanagersecurityadminconfiguration.NetworkManagerSecurityAdminConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

networkmanagersecurityadminconfiguration.NetworkManagerSecurityAdminConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput">ApplyOnNetworkIntentPolicyBasedServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput">NetworkManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices">ApplyOnNetworkIntentPolicyBasedServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId">NetworkManagerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts"></a>

```go
func Timeouts() NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a>

---

##### `ApplyOnNetworkIntentPolicyBasedServicesInput`<sup>Optional</sup> <a name="ApplyOnNetworkIntentPolicyBasedServicesInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput"></a>

```go
func ApplyOnNetworkIntentPolicyBasedServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkManagerIdInput`<sup>Optional</sup> <a name="NetworkManagerIdInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput"></a>

```go
func NetworkManagerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyOnNetworkIntentPolicyBasedServices`<sup>Required</sup> <a name="ApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices"></a>

```go
func ApplyOnNetworkIntentPolicyBasedServices() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId"></a>

```go
func NetworkManagerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerSecurityAdminConfigurationConfig <a name="NetworkManagerSecurityAdminConfigurationConfig" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

&networkmanagersecurityadminconfiguration.NetworkManagerSecurityAdminConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkManagerId: *string,
	ApplyOnNetworkIntentPolicyBasedServices: *[]*string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId">NetworkManagerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices">ApplyOnNetworkIntentPolicyBasedServices</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}.

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId"></a>

```go
NetworkManagerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}.

---

##### `ApplyOnNetworkIntentPolicyBasedServices`<sup>Optional</sup> <a name="ApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices"></a>

```go
ApplyOnNetworkIntentPolicyBasedServices *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts"></a>

```go
Timeouts NetworkManagerSecurityAdminConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#timeouts NetworkManagerSecurityAdminConfiguration#timeouts}

---

### NetworkManagerSecurityAdminConfigurationTimeouts <a name="NetworkManagerSecurityAdminConfigurationTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

&networkmanagersecurityadminconfiguration.NetworkManagerSecurityAdminConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference <a name="NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagersecurityadminconfiguration"

networkmanagersecurityadminconfiguration.NewNetworkManagerSecurityAdminConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



