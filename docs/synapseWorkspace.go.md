# `synapseWorkspace` Submodule <a name="`synapseWorkspace` Submodule" id="@cdktf/provider-azurerm.synapseWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspace <a name="SynapseWorkspace" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace azurerm_synapse_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.NewSynapseWorkspace(scope Construct, id *string, config SynapseWorkspaceConfig) SynapseWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig">SynapseWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig">SynapseWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo">PutAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo">PutGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureDevopsRepo">ResetAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetComputeSubnetId">ResetComputeSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetDataExfiltrationProtectionEnabled">ResetDataExfiltrationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetGithubRepo">ResetGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetLinkingAllowedForAadTenantIds">ResetLinkingAllowedForAadTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedVirtualNetworkEnabled">ResetManagedVirtualNetworkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPurviewId">ResetPurviewId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLogin">ResetSqlAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLoginPassword">ResetSqlAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlIdentityControlEnabled">ResetSqlIdentityControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureDevopsRepo` <a name="PutAzureDevopsRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo"></a>

```go
func PutAzureDevopsRepo(value SynapseWorkspaceAzureDevopsRepo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey"></a>

```go
func PutCustomerManagedKey(value SynapseWorkspaceCustomerManagedKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---

##### `PutGithubRepo` <a name="PutGithubRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo"></a>

```go
func PutGithubRepo(value SynapseWorkspaceGithubRepo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity"></a>

```go
func PutIdentity(value SynapseWorkspaceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value SynapseWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureadAuthenticationOnly"></a>

```go
func ResetAzureadAuthenticationOnly()
```

##### `ResetAzureDevopsRepo` <a name="ResetAzureDevopsRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureDevopsRepo"></a>

```go
func ResetAzureDevopsRepo()
```

##### `ResetComputeSubnetId` <a name="ResetComputeSubnetId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetComputeSubnetId"></a>

```go
func ResetComputeSubnetId()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDataExfiltrationProtectionEnabled` <a name="ResetDataExfiltrationProtectionEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetDataExfiltrationProtectionEnabled"></a>

```go
func ResetDataExfiltrationProtectionEnabled()
```

##### `ResetGithubRepo` <a name="ResetGithubRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetGithubRepo"></a>

```go
func ResetGithubRepo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLinkingAllowedForAadTenantIds` <a name="ResetLinkingAllowedForAadTenantIds" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetLinkingAllowedForAadTenantIds"></a>

```go
func ResetLinkingAllowedForAadTenantIds()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedResourceGroupName"></a>

```go
func ResetManagedResourceGroupName()
```

##### `ResetManagedVirtualNetworkEnabled` <a name="ResetManagedVirtualNetworkEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedVirtualNetworkEnabled"></a>

```go
func ResetManagedVirtualNetworkEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetPurviewId` <a name="ResetPurviewId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPurviewId"></a>

```go
func ResetPurviewId()
```

##### `ResetSqlAdministratorLogin` <a name="ResetSqlAdministratorLogin" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLogin"></a>

```go
func ResetSqlAdministratorLogin()
```

##### `ResetSqlAdministratorLoginPassword` <a name="ResetSqlAdministratorLoginPassword" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLoginPassword"></a>

```go
func ResetSqlAdministratorLoginPassword()
```

##### `ResetSqlIdentityControlEnabled` <a name="ResetSqlIdentityControlEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlIdentityControlEnabled"></a>

```go
func ResetSqlIdentityControlEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.SynapseWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.SynapseWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.SynapseWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.SynapseWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynapseWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynapseWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynapseWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepo">AzureDevopsRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference">SynapseWorkspaceAzureDevopsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connectivityEndpoints">ConnectivityEndpoints</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference">SynapseWorkspaceCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepo">GithubRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference">SynapseWorkspaceGithubRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference">SynapseWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference">SynapseWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepoInput">AzureDevopsRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetIdInput">ComputeSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabledInput">DataExfiltrationProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepoInput">GithubRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIdsInput">LinkingAllowedForAadTenantIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabledInput">ManagedVirtualNetworkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewIdInput">PurviewIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginInput">SqlAdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPasswordInput">SqlAdministratorLoginPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabledInput">SqlIdentityControlEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemIdInput">StorageDataLakeGen2FilesystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetId">ComputeSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabled">DataExfiltrationProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIds">LinkingAllowedForAadTenantIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabled">ManagedVirtualNetworkEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewId">PurviewId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLogin">SqlAdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPassword">SqlAdministratorLoginPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabled">SqlIdentityControlEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemId">StorageDataLakeGen2FilesystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureDevopsRepo`<sup>Required</sup> <a name="AzureDevopsRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepo"></a>

```go
func AzureDevopsRepo() SynapseWorkspaceAzureDevopsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference">SynapseWorkspaceAzureDevopsRepoOutputReference</a>

---

##### `ConnectivityEndpoints`<sup>Required</sup> <a name="ConnectivityEndpoints" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connectivityEndpoints"></a>

```go
func ConnectivityEndpoints() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKey"></a>

```go
func CustomerManagedKey() SynapseWorkspaceCustomerManagedKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference">SynapseWorkspaceCustomerManagedKeyOutputReference</a>

---

##### `GithubRepo`<sup>Required</sup> <a name="GithubRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepo"></a>

```go
func GithubRepo() SynapseWorkspaceGithubRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference">SynapseWorkspaceGithubRepoOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identity"></a>

```go
func Identity() SynapseWorkspaceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference">SynapseWorkspaceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeouts"></a>

```go
func Timeouts() SynapseWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference">SynapseWorkspaceTimeoutsOutputReference</a>

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnlyInput"></a>

```go
func AzureadAuthenticationOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `AzureDevopsRepoInput`<sup>Optional</sup> <a name="AzureDevopsRepoInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepoInput"></a>

```go
func AzureDevopsRepoInput() SynapseWorkspaceAzureDevopsRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---

##### `ComputeSubnetIdInput`<sup>Optional</sup> <a name="ComputeSubnetIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetIdInput"></a>

```go
func ComputeSubnetIdInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() SynapseWorkspaceCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---

##### `DataExfiltrationProtectionEnabledInput`<sup>Optional</sup> <a name="DataExfiltrationProtectionEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabledInput"></a>

```go
func DataExfiltrationProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GithubRepoInput`<sup>Optional</sup> <a name="GithubRepoInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepoInput"></a>

```go
func GithubRepoInput() SynapseWorkspaceGithubRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identityInput"></a>

```go
func IdentityInput() SynapseWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkingAllowedForAadTenantIdsInput`<sup>Optional</sup> <a name="LinkingAllowedForAadTenantIdsInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIdsInput"></a>

```go
func LinkingAllowedForAadTenantIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupNameInput"></a>

```go
func ManagedResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ManagedVirtualNetworkEnabledInput`<sup>Optional</sup> <a name="ManagedVirtualNetworkEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabledInput"></a>

```go
func ManagedVirtualNetworkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PurviewIdInput`<sup>Optional</sup> <a name="PurviewIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewIdInput"></a>

```go
func PurviewIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SqlAdministratorLoginInput`<sup>Optional</sup> <a name="SqlAdministratorLoginInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginInput"></a>

```go
func SqlAdministratorLoginInput() *string
```

- *Type:* *string

---

##### `SqlAdministratorLoginPasswordInput`<sup>Optional</sup> <a name="SqlAdministratorLoginPasswordInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPasswordInput"></a>

```go
func SqlAdministratorLoginPasswordInput() *string
```

- *Type:* *string

---

##### `SqlIdentityControlEnabledInput`<sup>Optional</sup> <a name="SqlIdentityControlEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabledInput"></a>

```go
func SqlIdentityControlEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StorageDataLakeGen2FilesystemIdInput`<sup>Optional</sup> <a name="StorageDataLakeGen2FilesystemIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemIdInput"></a>

```go
func StorageDataLakeGen2FilesystemIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnly"></a>

```go
func AzureadAuthenticationOnly() interface{}
```

- *Type:* interface{}

---

##### `ComputeSubnetId`<sup>Required</sup> <a name="ComputeSubnetId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetId"></a>

```go
func ComputeSubnetId() *string
```

- *Type:* *string

---

##### `DataExfiltrationProtectionEnabled`<sup>Required</sup> <a name="DataExfiltrationProtectionEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabled"></a>

```go
func DataExfiltrationProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkingAllowedForAadTenantIds`<sup>Required</sup> <a name="LinkingAllowedForAadTenantIds" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIds"></a>

```go
func LinkingAllowedForAadTenantIds() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupName"></a>

```go
func ManagedResourceGroupName() *string
```

- *Type:* *string

---

##### `ManagedVirtualNetworkEnabled`<sup>Required</sup> <a name="ManagedVirtualNetworkEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabled"></a>

```go
func ManagedVirtualNetworkEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `PurviewId`<sup>Required</sup> <a name="PurviewId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewId"></a>

```go
func PurviewId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SqlAdministratorLogin`<sup>Required</sup> <a name="SqlAdministratorLogin" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLogin"></a>

```go
func SqlAdministratorLogin() *string
```

- *Type:* *string

---

##### `SqlAdministratorLoginPassword`<sup>Required</sup> <a name="SqlAdministratorLoginPassword" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPassword"></a>

```go
func SqlAdministratorLoginPassword() *string
```

- *Type:* *string

---

##### `SqlIdentityControlEnabled`<sup>Required</sup> <a name="SqlIdentityControlEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabled"></a>

```go
func SqlIdentityControlEnabled() interface{}
```

- *Type:* interface{}

---

##### `StorageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="StorageDataLakeGen2FilesystemId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemId"></a>

```go
func StorageDataLakeGen2FilesystemId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceAzureDevopsRepo <a name="SynapseWorkspaceAzureDevopsRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

&synapseworkspace.SynapseWorkspaceAzureDevopsRepo {
	AccountName: *string,
	BranchName: *string,
	ProjectName: *string,
	RepositoryName: *string,
	RootFolder: *string,
	LastCommitId: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.branchName">BranchName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.projectName">ProjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.rootFolder">RootFolder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.lastCommitId">LastCommitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}.

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}.

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}.

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}.

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.rootFolder"></a>

```go
RootFolder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}.

---

##### `LastCommitId`<sup>Optional</sup> <a name="LastCommitId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.lastCommitId"></a>

```go
LastCommitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}.

---

### SynapseWorkspaceConfig <a name="SynapseWorkspaceConfig" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

&synapseworkspace.SynapseWorkspaceConfig {
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
	StorageDataLakeGen2FilesystemId: *string,
	AzureadAuthenticationOnly: interface{},
	AzureDevopsRepo: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo,
	ComputeSubnetId: *string,
	CustomerManagedKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey,
	DataExfiltrationProtectionEnabled: interface{},
	GithubRepo: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseWorkspace.SynapseWorkspaceIdentity,
	LinkingAllowedForAadTenantIds: *[]*string,
	ManagedResourceGroupName: *string,
	ManagedVirtualNetworkEnabled: interface{},
	PublicNetworkAccessEnabled: interface{},
	PurviewId: *string,
	SqlAdministratorLogin: *string,
	SqlAdministratorLoginPassword: *string,
	SqlIdentityControlEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseWorkspace.SynapseWorkspaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.storageDataLakeGen2FilesystemId">StorageDataLakeGen2FilesystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureDevopsRepo">AzureDevopsRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | azure_devops_repo block. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.computeSubnetId">ComputeSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dataExfiltrationProtectionEnabled">DataExfiltrationProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.githubRepo">GithubRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | github_repo block. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.linkingAllowedForAadTenantIds">LinkingAllowedForAadTenantIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedVirtualNetworkEnabled">ManagedVirtualNetworkEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.purviewId">PurviewId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLogin">SqlAdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLoginPassword">SqlAdministratorLoginPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlIdentityControlEnabled">SqlIdentityControlEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}.

---

##### `StorageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="StorageDataLakeGen2FilesystemId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.storageDataLakeGen2FilesystemId"></a>

```go
StorageDataLakeGen2FilesystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureadAuthenticationOnly"></a>

```go
AzureadAuthenticationOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}.

---

##### `AzureDevopsRepo`<sup>Optional</sup> <a name="AzureDevopsRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureDevopsRepo"></a>

```go
AzureDevopsRepo SynapseWorkspaceAzureDevopsRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

azure_devops_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#azure_devops_repo SynapseWorkspace#azure_devops_repo}

---

##### `ComputeSubnetId`<sup>Optional</sup> <a name="ComputeSubnetId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.computeSubnetId"></a>

```go
ComputeSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey SynapseWorkspaceCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#customer_managed_key SynapseWorkspace#customer_managed_key}

---

##### `DataExfiltrationProtectionEnabled`<sup>Optional</sup> <a name="DataExfiltrationProtectionEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dataExfiltrationProtectionEnabled"></a>

```go
DataExfiltrationProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}.

---

##### `GithubRepo`<sup>Optional</sup> <a name="GithubRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.githubRepo"></a>

```go
GithubRepo SynapseWorkspaceGithubRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

github_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#github_repo SynapseWorkspace#github_repo}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.identity"></a>

```go
Identity SynapseWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#identity SynapseWorkspace#identity}

---

##### `LinkingAllowedForAadTenantIds`<sup>Optional</sup> <a name="LinkingAllowedForAadTenantIds" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.linkingAllowedForAadTenantIds"></a>

```go
LinkingAllowedForAadTenantIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}.

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedResourceGroupName"></a>

```go
ManagedResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}.

---

##### `ManagedVirtualNetworkEnabled`<sup>Optional</sup> <a name="ManagedVirtualNetworkEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedVirtualNetworkEnabled"></a>

```go
ManagedVirtualNetworkEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}.

---

##### `PurviewId`<sup>Optional</sup> <a name="PurviewId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.purviewId"></a>

```go
PurviewId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}.

---

##### `SqlAdministratorLogin`<sup>Optional</sup> <a name="SqlAdministratorLogin" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLogin"></a>

```go
SqlAdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}.

---

##### `SqlAdministratorLoginPassword`<sup>Optional</sup> <a name="SqlAdministratorLoginPassword" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLoginPassword"></a>

```go
SqlAdministratorLoginPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}.

---

##### `SqlIdentityControlEnabled`<sup>Optional</sup> <a name="SqlIdentityControlEnabled" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlIdentityControlEnabled"></a>

```go
SqlIdentityControlEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.timeouts"></a>

```go
Timeouts SynapseWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#timeouts SynapseWorkspace#timeouts}

---

### SynapseWorkspaceCustomerManagedKey <a name="SynapseWorkspaceCustomerManagedKey" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

&synapseworkspace.SynapseWorkspaceCustomerManagedKey {
	KeyVersionlessId: *string,
	KeyName: *string,
	UserAssignedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyVersionlessId">KeyVersionlessId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}. |

---

##### `KeyVersionlessId`<sup>Required</sup> <a name="KeyVersionlessId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyVersionlessId"></a>

```go
KeyVersionlessId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.userAssignedIdentityId"></a>

```go
UserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}.

---

### SynapseWorkspaceGithubRepo <a name="SynapseWorkspaceGithubRepo" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

&synapseworkspace.SynapseWorkspaceGithubRepo {
	AccountName: *string,
	BranchName: *string,
	RepositoryName: *string,
	RootFolder: *string,
	GitUrl: *string,
	LastCommitId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.branchName">BranchName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.rootFolder">RootFolder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.gitUrl">GitUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.lastCommitId">LastCommitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}.

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}.

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}.

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.rootFolder"></a>

```go
RootFolder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}.

---

##### `GitUrl`<sup>Optional</sup> <a name="GitUrl" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.gitUrl"></a>

```go
GitUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}.

---

##### `LastCommitId`<sup>Optional</sup> <a name="LastCommitId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.lastCommitId"></a>

```go
LastCommitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}.

---

### SynapseWorkspaceIdentity <a name="SynapseWorkspaceIdentity" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

&synapseworkspace.SynapseWorkspaceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#type SynapseWorkspace#type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#type SynapseWorkspace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}.

---

### SynapseWorkspaceTimeouts <a name="SynapseWorkspaceTimeouts" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

&synapseworkspace.SynapseWorkspaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#create SynapseWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#read SynapseWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#update SynapseWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#create SynapseWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#read SynapseWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/synapse_workspace#update SynapseWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceAzureDevopsRepoOutputReference <a name="SynapseWorkspaceAzureDevopsRepoOutputReference" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.NewSynapseWorkspaceAzureDevopsRepoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceAzureDevopsRepoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetLastCommitId">ResetLastCommitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLastCommitId` <a name="ResetLastCommitId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetLastCommitId"></a>

```go
func ResetLastCommitId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitIdInput">LastCommitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolderInput">RootFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitId">LastCommitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolder">RootFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `LastCommitIdInput`<sup>Optional</sup> <a name="LastCommitIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitIdInput"></a>

```go
func LastCommitIdInput() *string
```

- *Type:* *string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `RootFolderInput`<sup>Optional</sup> <a name="RootFolderInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolderInput"></a>

```go
func RootFolderInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `LastCommitId`<sup>Required</sup> <a name="LastCommitId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitId"></a>

```go
func LastCommitId() *string
```

- *Type:* *string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolder"></a>

```go
func RootFolder() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.internalValue"></a>

```go
func InternalValue() SynapseWorkspaceAzureDevopsRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---


### SynapseWorkspaceCustomerManagedKeyOutputReference <a name="SynapseWorkspaceCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.NewSynapseWorkspaceCustomerManagedKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceCustomerManagedKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetUserAssignedIdentityId"></a>

```go
func ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessIdInput">KeyVersionlessIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessId">KeyVersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyVersionlessIdInput`<sup>Optional</sup> <a name="KeyVersionlessIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessIdInput"></a>

```go
func KeyVersionlessIdInput() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```go
func UserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyVersionlessId`<sup>Required</sup> <a name="KeyVersionlessId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessId"></a>

```go
func KeyVersionlessId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() SynapseWorkspaceCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---


### SynapseWorkspaceGithubRepoOutputReference <a name="SynapseWorkspaceGithubRepoOutputReference" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.NewSynapseWorkspaceGithubRepoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceGithubRepoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetGitUrl">ResetGitUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetLastCommitId">ResetLastCommitId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGitUrl` <a name="ResetGitUrl" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetGitUrl"></a>

```go
func ResetGitUrl()
```

##### `ResetLastCommitId` <a name="ResetLastCommitId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetLastCommitId"></a>

```go
func ResetLastCommitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrlInput">GitUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitIdInput">LastCommitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolderInput">RootFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrl">GitUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitId">LastCommitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolder">RootFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `GitUrlInput`<sup>Optional</sup> <a name="GitUrlInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrlInput"></a>

```go
func GitUrlInput() *string
```

- *Type:* *string

---

##### `LastCommitIdInput`<sup>Optional</sup> <a name="LastCommitIdInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitIdInput"></a>

```go
func LastCommitIdInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `RootFolderInput`<sup>Optional</sup> <a name="RootFolderInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolderInput"></a>

```go
func RootFolderInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `GitUrl`<sup>Required</sup> <a name="GitUrl" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrl"></a>

```go
func GitUrl() *string
```

- *Type:* *string

---

##### `LastCommitId`<sup>Required</sup> <a name="LastCommitId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitId"></a>

```go
func LastCommitId() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolder"></a>

```go
func RootFolder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.internalValue"></a>

```go
func InternalValue() SynapseWorkspaceGithubRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---


### SynapseWorkspaceIdentityOutputReference <a name="SynapseWorkspaceIdentityOutputReference" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.NewSynapseWorkspaceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() SynapseWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---


### SynapseWorkspaceTimeoutsOutputReference <a name="SynapseWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspace"

synapseworkspace.NewSynapseWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



