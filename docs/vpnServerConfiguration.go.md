# `azurerm_vpn_server_configuration`

Refer to the Terraform Registory for docs: [`azurerm_vpn_server_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration).

# `vpnServerConfiguration` Submodule <a name="`vpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.vpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnServerConfiguration <a name="VpnServerConfiguration" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfiguration(scope Construct, id *string, config VpnServerConfigurationConfig) VpnServerConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig">VpnServerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig">VpnServerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication">PutAzureActiveDirectoryAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate">PutClientRevokedCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate">PutClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy">PutIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius">PutRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetAzureActiveDirectoryAuthentication">ResetAzureActiveDirectoryAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRevokedCertificate">ResetClientRevokedCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRootCertificate">ResetClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetIpsecPolicy">ResetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetRadius">ResetRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetVpnProtocols">ResetVpnProtocols</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAzureActiveDirectoryAuthentication` <a name="PutAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication"></a>

```go
func PutAzureActiveDirectoryAuthentication(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication.parameter.value"></a>

- *Type:* interface{}

---

##### `PutClientRevokedCertificate` <a name="PutClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate"></a>

```go
func PutClientRevokedCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutClientRootCertificate` <a name="PutClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate"></a>

```go
func PutClientRootCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpsecPolicy` <a name="PutIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy"></a>

```go
func PutIpsecPolicy(value VpnServerConfigurationIpsecPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---

##### `PutRadius` <a name="PutRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius"></a>

```go
func PutRadius(value VpnServerConfigurationRadius)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value VpnServerConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>

---

##### `ResetAzureActiveDirectoryAuthentication` <a name="ResetAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetAzureActiveDirectoryAuthentication"></a>

```go
func ResetAzureActiveDirectoryAuthentication()
```

##### `ResetClientRevokedCertificate` <a name="ResetClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRevokedCertificate"></a>

```go
func ResetClientRevokedCertificate()
```

##### `ResetClientRootCertificate` <a name="ResetClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRootCertificate"></a>

```go
func ResetClientRootCertificate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetIpsecPolicy` <a name="ResetIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetIpsecPolicy"></a>

```go
func ResetIpsecPolicy()
```

##### `ResetRadius` <a name="ResetRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetRadius"></a>

```go
func ResetRadius()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpnProtocols` <a name="ResetVpnProtocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetVpnProtocols"></a>

```go
func ResetVpnProtocols()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.VpnServerConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.VpnServerConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.VpnServerConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.VpnServerConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpnServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpnServerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpnServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpnServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthentication">AzureActiveDirectoryAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList">VpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificate">ClientRevokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList">VpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList">VpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference">VpnServerConfigurationIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radius">Radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference">VpnServerConfigurationRadiusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference">VpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthenticationInput">AzureActiveDirectoryAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificateInput">ClientRevokedCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificateInput">ClientRootCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicyInput">IpsecPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radiusInput">RadiusInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypesInput">VpnAuthenticationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocolsInput">VpnProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypes">VpnAuthenticationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocols">VpnProtocols</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureActiveDirectoryAuthentication`<sup>Required</sup> <a name="AzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```go
func AzureActiveDirectoryAuthentication() VpnServerConfigurationAzureActiveDirectoryAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList">VpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `ClientRevokedCertificate`<sup>Required</sup> <a name="ClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificate"></a>

```go
func ClientRevokedCertificate() VpnServerConfigurationClientRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList">VpnServerConfigurationClientRevokedCertificateList</a>

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificate"></a>

```go
func ClientRootCertificate() VpnServerConfigurationClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList">VpnServerConfigurationClientRootCertificateList</a>

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicy"></a>

```go
func IpsecPolicy() VpnServerConfigurationIpsecPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference">VpnServerConfigurationIpsecPolicyOutputReference</a>

---

##### `Radius`<sup>Required</sup> <a name="Radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radius"></a>

```go
func Radius() VpnServerConfigurationRadiusOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference">VpnServerConfigurationRadiusOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeouts"></a>

```go
func Timeouts() VpnServerConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference">VpnServerConfigurationTimeoutsOutputReference</a>

---

##### `AzureActiveDirectoryAuthenticationInput`<sup>Optional</sup> <a name="AzureActiveDirectoryAuthenticationInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthenticationInput"></a>

```go
func AzureActiveDirectoryAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `ClientRevokedCertificateInput`<sup>Optional</sup> <a name="ClientRevokedCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificateInput"></a>

```go
func ClientRevokedCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `ClientRootCertificateInput`<sup>Optional</sup> <a name="ClientRootCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificateInput"></a>

```go
func ClientRootCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsecPolicyInput`<sup>Optional</sup> <a name="IpsecPolicyInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicyInput"></a>

```go
func IpsecPolicyInput() VpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RadiusInput`<sup>Optional</sup> <a name="RadiusInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radiusInput"></a>

```go
func RadiusInput() VpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpnAuthenticationTypesInput`<sup>Optional</sup> <a name="VpnAuthenticationTypesInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypesInput"></a>

```go
func VpnAuthenticationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpnProtocolsInput`<sup>Optional</sup> <a name="VpnProtocolsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocolsInput"></a>

```go
func VpnProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpnAuthenticationTypes`<sup>Required</sup> <a name="VpnAuthenticationTypes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```go
func VpnAuthenticationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `VpnProtocols`<sup>Required</sup> <a name="VpnProtocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocols"></a>

```go
func VpnProtocols() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnServerConfigurationAzureActiveDirectoryAuthentication <a name="VpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication {
	Audience: *string,
	Issuer: *string,
	Tenant: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.audience">Audience</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.tenant">Tenant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}.

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}.

---

### VpnServerConfigurationClientRevokedCertificate <a name="VpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationClientRevokedCertificate {
	Name: *string,
	Thumbprint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.thumbprint"></a>

```go
Thumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}.

---

### VpnServerConfigurationClientRootCertificate <a name="VpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationClientRootCertificate {
	Name: *string,
	PublicCertData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.publicCertData"></a>

```go
PublicCertData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}.

---

### VpnServerConfigurationConfig <a name="VpnServerConfigurationConfig" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	VpnAuthenticationTypes: *[]*string,
	AzureActiveDirectoryAuthentication: interface{},
	ClientRevokedCertificate: interface{},
	ClientRootCertificate: interface{},
	Id: *string,
	IpsecPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy,
	Radius: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.vpnServerConfiguration.VpnServerConfigurationRadius,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts,
	VpnProtocols: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnAuthenticationTypes">VpnAuthenticationTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.azureActiveDirectoryAuthentication">AzureActiveDirectoryAuthentication</a></code> | <code>interface{}</code> | azure_active_directory_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRevokedCertificate">ClientRevokedCertificate</a></code> | <code>interface{}</code> | client_revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRootCertificate">ClientRootCertificate</a></code> | <code>interface{}</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.radius">Radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | radius block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnProtocols">VpnProtocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}.

---

##### `VpnAuthenticationTypes`<sup>Required</sup> <a name="VpnAuthenticationTypes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnAuthenticationTypes"></a>

```go
VpnAuthenticationTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}.

---

##### `AzureActiveDirectoryAuthentication`<sup>Optional</sup> <a name="AzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.azureActiveDirectoryAuthentication"></a>

```go
AzureActiveDirectoryAuthentication interface{}
```

- *Type:* interface{}

azure_active_directory_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}

---

##### `ClientRevokedCertificate`<sup>Optional</sup> <a name="ClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRevokedCertificate"></a>

```go
ClientRevokedCertificate interface{}
```

- *Type:* interface{}

client_revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}

---

##### `ClientRootCertificate`<sup>Optional</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRootCertificate"></a>

```go
ClientRootCertificate interface{}
```

- *Type:* interface{}

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpsecPolicy`<sup>Optional</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.ipsecPolicy"></a>

```go
IpsecPolicy VpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ipsec_policy VpnServerConfiguration#ipsec_policy}

---

##### `Radius`<sup>Optional</sup> <a name="Radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.radius"></a>

```go
Radius VpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#radius VpnServerConfiguration#radius}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.timeouts"></a>

```go
Timeouts VpnServerConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#timeouts VpnServerConfiguration#timeouts}

---

##### `VpnProtocols`<sup>Optional</sup> <a name="VpnProtocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnProtocols"></a>

```go
VpnProtocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}.

---

### VpnServerConfigurationIpsecPolicy <a name="VpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationIpsecPolicy {
	DhGroup: *string,
	IkeEncryption: *string,
	IkeIntegrity: *string,
	IpsecEncryption: *string,
	IpsecIntegrity: *string,
	PfsGroup: *string,
	SaDataSizeKilobytes: *f64,
	SaLifetimeSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.dhGroup">DhGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeEncryption">IkeEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeIntegrity">IkeIntegrity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecEncryption">IpsecEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saDataSizeKilobytes">SaDataSizeKilobytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saLifetimeSeconds">SaLifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.dhGroup"></a>

```go
DhGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}.

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeEncryption"></a>

```go
IkeEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}.

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeIntegrity"></a>

```go
IkeIntegrity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}.

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecEncryption"></a>

```go
IpsecEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}.

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecIntegrity"></a>

```go
IpsecIntegrity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}.

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.pfsGroup"></a>

```go
PfsGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}.

---

##### `SaDataSizeKilobytes`<sup>Required</sup> <a name="SaDataSizeKilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saDataSizeKilobytes"></a>

```go
SaDataSizeKilobytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}.

---

##### `SaLifetimeSeconds`<sup>Required</sup> <a name="SaLifetimeSeconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saLifetimeSeconds"></a>

```go
SaLifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}.

---

### VpnServerConfigurationRadius <a name="VpnServerConfigurationRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationRadius {
	ClientRootCertificate: interface{},
	Server: interface{},
	ServerRootCertificate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.clientRootCertificate">ClientRootCertificate</a></code> | <code>interface{}</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.server">Server</a></code> | <code>interface{}</code> | server block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.serverRootCertificate">ServerRootCertificate</a></code> | <code>interface{}</code> | server_root_certificate block. |

---

##### `ClientRootCertificate`<sup>Optional</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.clientRootCertificate"></a>

```go
ClientRootCertificate interface{}
```

- *Type:* interface{}

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `Server`<sup>Optional</sup> <a name="Server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.server"></a>

```go
Server interface{}
```

- *Type:* interface{}

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#server VpnServerConfiguration#server}

---

##### `ServerRootCertificate`<sup>Optional</sup> <a name="ServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.serverRootCertificate"></a>

```go
ServerRootCertificate interface{}
```

- *Type:* interface{}

server_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}

---

### VpnServerConfigurationRadiusClientRootCertificate <a name="VpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationRadiusClientRootCertificate {
	Name: *string,
	Thumbprint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.thumbprint"></a>

```go
Thumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}.

---

### VpnServerConfigurationRadiusServer <a name="VpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationRadiusServer {
	Address: *string,
	Score: *f64,
	Secret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.score">Score</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}.

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.score"></a>

```go
Score *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}.

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}.

---

### VpnServerConfigurationRadiusServerRootCertificate <a name="VpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationRadiusServerRootCertificate {
	Name: *string,
	PublicCertData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.publicCertData"></a>

```go
PublicCertData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}.

---

### VpnServerConfigurationTimeouts <a name="VpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

&vpnserverconfiguration.VpnServerConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="VpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationAzureActiveDirectoryAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnServerConfigurationAzureActiveDirectoryAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```go
func Get(index *f64) VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationClientRevokedCertificateList <a name="VpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationClientRevokedCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnServerConfigurationClientRevokedCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get"></a>

```go
func Get(index *f64) VpnServerConfigurationClientRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationClientRevokedCertificateOutputReference <a name="VpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationClientRevokedCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnServerConfigurationClientRevokedCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprintInput"></a>

```go
func ThumbprintInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationClientRootCertificateList <a name="VpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationClientRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnServerConfigurationClientRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get"></a>

```go
func Get(index *f64) VpnServerConfigurationClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationClientRootCertificateOutputReference <a name="VpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationClientRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnServerConfigurationClientRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertDataInput">PublicCertDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicCertDataInput`<sup>Optional</sup> <a name="PublicCertDataInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertDataInput"></a>

```go
func PublicCertDataInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```go
func PublicCertData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationIpsecPolicyOutputReference <a name="VpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationIpsecPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnServerConfigurationIpsecPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryptionInput">IkeEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrityInput">IkeIntegrityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryptionInput">IpsecEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrityInput">IpsecIntegrityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroupInput">PfsGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytesInput">SaDataSizeKilobytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSecondsInput">SaLifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">SaDataSizeKilobytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">SaLifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroupInput"></a>

```go
func DhGroupInput() *string
```

- *Type:* *string

---

##### `IkeEncryptionInput`<sup>Optional</sup> <a name="IkeEncryptionInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```go
func IkeEncryptionInput() *string
```

- *Type:* *string

---

##### `IkeIntegrityInput`<sup>Optional</sup> <a name="IkeIntegrityInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```go
func IkeIntegrityInput() *string
```

- *Type:* *string

---

##### `IpsecEncryptionInput`<sup>Optional</sup> <a name="IpsecEncryptionInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```go
func IpsecEncryptionInput() *string
```

- *Type:* *string

---

##### `IpsecIntegrityInput`<sup>Optional</sup> <a name="IpsecIntegrityInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```go
func IpsecIntegrityInput() *string
```

- *Type:* *string

---

##### `PfsGroupInput`<sup>Optional</sup> <a name="PfsGroupInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```go
func PfsGroupInput() *string
```

- *Type:* *string

---

##### `SaDataSizeKilobytesInput`<sup>Optional</sup> <a name="SaDataSizeKilobytesInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytesInput"></a>

```go
func SaDataSizeKilobytesInput() *f64
```

- *Type:* *f64

---

##### `SaLifetimeSecondsInput`<sup>Optional</sup> <a name="SaLifetimeSecondsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSecondsInput"></a>

```go
func SaLifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```go
func IkeEncryption() *string
```

- *Type:* *string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```go
func IkeIntegrity() *string
```

- *Type:* *string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```go
func IpsecEncryption() *string
```

- *Type:* *string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```go
func IpsecIntegrity() *string
```

- *Type:* *string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```go
func PfsGroup() *string
```

- *Type:* *string

---

##### `SaDataSizeKilobytes`<sup>Required</sup> <a name="SaDataSizeKilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```go
func SaDataSizeKilobytes() *f64
```

- *Type:* *f64

---

##### `SaLifetimeSeconds`<sup>Required</sup> <a name="SaLifetimeSeconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```go
func SaLifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---


### VpnServerConfigurationRadiusClientRootCertificateList <a name="VpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusClientRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnServerConfigurationRadiusClientRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```go
func Get(index *f64) VpnServerConfigurationRadiusClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="VpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusClientRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnServerConfigurationRadiusClientRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprintInput"></a>

```go
func ThumbprintInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationRadiusOutputReference <a name="VpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnServerConfigurationRadiusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate">PutClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer">PutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate">PutServerRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetClientRootCertificate">ResetClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServer">ResetServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServerRootCertificate">ResetServerRootCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientRootCertificate` <a name="PutClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate"></a>

```go
func PutClientRootCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServer` <a name="PutServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer"></a>

```go
func PutServer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServerRootCertificate` <a name="PutServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate"></a>

```go
func PutServerRootCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientRootCertificate` <a name="ResetClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetClientRootCertificate"></a>

```go
func ResetClientRootCertificate()
```

##### `ResetServer` <a name="ResetServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServer"></a>

```go
func ResetServer()
```

##### `ResetServerRootCertificate` <a name="ResetServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServerRootCertificate"></a>

```go
func ResetServerRootCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList">VpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.server">Server</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList">VpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">ServerRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList">VpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificateInput">ClientRootCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverInput">ServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificateInput">ServerRootCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```go
func ClientRootCertificate() VpnServerConfigurationRadiusClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList">VpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.server"></a>

```go
func Server() VpnServerConfigurationRadiusServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList">VpnServerConfigurationRadiusServerList</a>

---

##### `ServerRootCertificate`<sup>Required</sup> <a name="ServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```go
func ServerRootCertificate() VpnServerConfigurationRadiusServerRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList">VpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `ClientRootCertificateInput`<sup>Optional</sup> <a name="ClientRootCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificateInput"></a>

```go
func ClientRootCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverInput"></a>

```go
func ServerInput() interface{}
```

- *Type:* interface{}

---

##### `ServerRootCertificateInput`<sup>Optional</sup> <a name="ServerRootCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificateInput"></a>

```go
func ServerRootCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---


### VpnServerConfigurationRadiusServerList <a name="VpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnServerConfigurationRadiusServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get"></a>

```go
func Get(index *f64) VpnServerConfigurationRadiusServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationRadiusServerOutputReference <a name="VpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnServerConfigurationRadiusServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.scoreInput">ScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.score">Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `ScoreInput`<sup>Optional</sup> <a name="ScoreInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.scoreInput"></a>

```go
func ScoreInput() *f64
```

- *Type:* *f64

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```go
func Score() *f64
```

- *Type:* *f64

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationRadiusServerRootCertificateList <a name="VpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusServerRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnServerConfigurationRadiusServerRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```go
func Get(index *f64) VpnServerConfigurationRadiusServerRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="VpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationRadiusServerRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnServerConfigurationRadiusServerRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertDataInput">PublicCertDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicCertDataInput`<sup>Optional</sup> <a name="PublicCertDataInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertDataInput"></a>

```go
func PublicCertDataInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```go
func PublicCertData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnServerConfigurationTimeoutsOutputReference <a name="VpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpnserverconfiguration"

vpnserverconfiguration.NewVpnServerConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnServerConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



