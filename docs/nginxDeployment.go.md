# `nginxDeployment` Submodule <a name="`nginxDeployment` Submodule" id="@cdktf/provider-azurerm.nginxDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NginxDeployment <a name="NginxDeployment" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment azurerm_nginx_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeployment(scope Construct, id *string, config NginxDeploymentConfig) NginxDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig">NginxDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig">NginxDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putAutoScaleProfile">PutAutoScaleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate">PutFrontendPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic">PutFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount">PutLoggingStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putWebApplicationFirewall">PutWebApplicationFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutomaticUpgradeChannel">ResetAutomaticUpgradeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutoScaleProfile">ResetAutoScaleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetDiagnoseSupportEnabled">ResetDiagnoseSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPrivate">ResetFrontendPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPublic">ResetFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetLoggingStorageAccount">ResetLoggingStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetManagedResourceGroup">ResetManagedResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetWebApplicationFirewall">ResetWebApplicationFirewall</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoScaleProfile` <a name="PutAutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putAutoScaleProfile"></a>

```go
func PutAutoScaleProfile(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putAutoScaleProfile.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFrontendPrivate` <a name="PutFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate"></a>

```go
func PutFrontendPrivate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFrontendPublic` <a name="PutFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic"></a>

```go
func PutFrontendPublic(value NginxDeploymentFrontendPublic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity"></a>

```go
func PutIdentity(value NginxDeploymentIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---

##### `PutLoggingStorageAccount` <a name="PutLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount"></a>

```go
func PutLoggingStorageAccount(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts"></a>

```go
func PutTimeouts(value NginxDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

---

##### `PutWebApplicationFirewall` <a name="PutWebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putWebApplicationFirewall"></a>

```go
func PutWebApplicationFirewall(value NginxDeploymentWebApplicationFirewall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putWebApplicationFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

---

##### `ResetAutomaticUpgradeChannel` <a name="ResetAutomaticUpgradeChannel" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutomaticUpgradeChannel"></a>

```go
func ResetAutomaticUpgradeChannel()
```

##### `ResetAutoScaleProfile` <a name="ResetAutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutoScaleProfile"></a>

```go
func ResetAutoScaleProfile()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetDiagnoseSupportEnabled` <a name="ResetDiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetDiagnoseSupportEnabled"></a>

```go
func ResetDiagnoseSupportEnabled()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetFrontendPrivate` <a name="ResetFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPrivate"></a>

```go
func ResetFrontendPrivate()
```

##### `ResetFrontendPublic` <a name="ResetFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPublic"></a>

```go
func ResetFrontendPublic()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLoggingStorageAccount` <a name="ResetLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetLoggingStorageAccount"></a>

```go
func ResetLoggingStorageAccount()
```

##### `ResetManagedResourceGroup` <a name="ResetManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetManagedResourceGroup"></a>

```go
func ResetManagedResourceGroup()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWebApplicationFirewall` <a name="ResetWebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetWebApplicationFirewall"></a>

```go
func ResetWebApplicationFirewall()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NginxDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NginxDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NginxDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NginxDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NginxDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NginxDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NginxDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NginxDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NginxDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfile">AutoScaleProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList">NginxDeploymentAutoScaleProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dataplaneApiEndpoint">DataplaneApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivate">FrontendPrivate</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList">NginxDeploymentFrontendPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublic">FrontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference">NginxDeploymentFrontendPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference">NginxDeploymentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccount">LoggingStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList">NginxDeploymentLoggingStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList">NginxDeploymentNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nginxVersion">NginxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference">NginxDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewall">WebApplicationFirewall</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference">NginxDeploymentWebApplicationFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannelInput">AutomaticUpgradeChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfileInput">AutoScaleProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabledInput">DiagnoseSupportEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivateInput">FrontendPrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublicInput">FrontendPublicInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccountInput">LoggingStorageAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroupInput">ManagedResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewallInput">WebApplicationFirewallInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannel">AutomaticUpgradeChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabled">DiagnoseSupportEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroup">ManagedResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoScaleProfile`<sup>Required</sup> <a name="AutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfile"></a>

```go
func AutoScaleProfile() NginxDeploymentAutoScaleProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList">NginxDeploymentAutoScaleProfileList</a>

---

##### `DataplaneApiEndpoint`<sup>Required</sup> <a name="DataplaneApiEndpoint" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dataplaneApiEndpoint"></a>

```go
func DataplaneApiEndpoint() *string
```

- *Type:* *string

---

##### `FrontendPrivate`<sup>Required</sup> <a name="FrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivate"></a>

```go
func FrontendPrivate() NginxDeploymentFrontendPrivateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList">NginxDeploymentFrontendPrivateList</a>

---

##### `FrontendPublic`<sup>Required</sup> <a name="FrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublic"></a>

```go
func FrontendPublic() NginxDeploymentFrontendPublicOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference">NginxDeploymentFrontendPublicOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identity"></a>

```go
func Identity() NginxDeploymentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference">NginxDeploymentIdentityOutputReference</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `LoggingStorageAccount`<sup>Required</sup> <a name="LoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccount"></a>

```go
func LoggingStorageAccount() NginxDeploymentLoggingStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList">NginxDeploymentLoggingStorageAccountList</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterface"></a>

```go
func NetworkInterface() NginxDeploymentNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList">NginxDeploymentNetworkInterfaceList</a>

---

##### `NginxVersion`<sup>Required</sup> <a name="NginxVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nginxVersion"></a>

```go
func NginxVersion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeouts"></a>

```go
func Timeouts() NginxDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference">NginxDeploymentTimeoutsOutputReference</a>

---

##### `WebApplicationFirewall`<sup>Required</sup> <a name="WebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewall"></a>

```go
func WebApplicationFirewall() NginxDeploymentWebApplicationFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference">NginxDeploymentWebApplicationFirewallOutputReference</a>

---

##### `AutomaticUpgradeChannelInput`<sup>Optional</sup> <a name="AutomaticUpgradeChannelInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannelInput"></a>

```go
func AutomaticUpgradeChannelInput() *string
```

- *Type:* *string

---

##### `AutoScaleProfileInput`<sup>Optional</sup> <a name="AutoScaleProfileInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfileInput"></a>

```go
func AutoScaleProfileInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `DiagnoseSupportEnabledInput`<sup>Optional</sup> <a name="DiagnoseSupportEnabledInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabledInput"></a>

```go
func DiagnoseSupportEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FrontendPrivateInput`<sup>Optional</sup> <a name="FrontendPrivateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivateInput"></a>

```go
func FrontendPrivateInput() interface{}
```

- *Type:* interface{}

---

##### `FrontendPublicInput`<sup>Optional</sup> <a name="FrontendPublicInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublicInput"></a>

```go
func FrontendPublicInput() NginxDeploymentFrontendPublic
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identityInput"></a>

```go
func IdentityInput() NginxDeploymentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingStorageAccountInput`<sup>Optional</sup> <a name="LoggingStorageAccountInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccountInput"></a>

```go
func LoggingStorageAccountInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedResourceGroupInput`<sup>Optional</sup> <a name="ManagedResourceGroupInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroupInput"></a>

```go
func ManagedResourceGroupInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebApplicationFirewallInput`<sup>Optional</sup> <a name="WebApplicationFirewallInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewallInput"></a>

```go
func WebApplicationFirewallInput() NginxDeploymentWebApplicationFirewall
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

---

##### `AutomaticUpgradeChannel`<sup>Required</sup> <a name="AutomaticUpgradeChannel" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannel"></a>

```go
func AutomaticUpgradeChannel() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `DiagnoseSupportEnabled`<sup>Required</sup> <a name="DiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabled"></a>

```go
func DiagnoseSupportEnabled() interface{}
```

- *Type:* interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedResourceGroup`<sup>Required</sup> <a name="ManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroup"></a>

```go
func ManagedResourceGroup() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NginxDeploymentAutoScaleProfile <a name="NginxDeploymentAutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentAutoScaleProfile {
	MaxCapacity: *f64,
	MinCapacity: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#max_capacity NginxDeployment#max_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#min_capacity NginxDeployment#min_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#name NginxDeployment#name}. |

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#max_capacity NginxDeployment#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#min_capacity NginxDeployment#min_capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

### NginxDeploymentConfig <a name="NginxDeploymentConfig" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentConfig {
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
	Sku: *string,
	AutomaticUpgradeChannel: *string,
	AutoScaleProfile: interface{},
	Capacity: *f64,
	DiagnoseSupportEnabled: interface{},
	Email: *string,
	FrontendPrivate: interface{},
	FrontendPublic: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.nginxDeployment.NginxDeploymentFrontendPublic,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.nginxDeployment.NginxDeploymentIdentity,
	LoggingStorageAccount: interface{},
	ManagedResourceGroup: *string,
	NetworkInterface: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.nginxDeployment.NginxDeploymentTimeouts,
	WebApplicationFirewall: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.nginxDeployment.NginxDeploymentWebApplicationFirewall,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#location NginxDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#name NginxDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#sku NginxDeployment#sku}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.automaticUpgradeChannel">AutomaticUpgradeChannel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#automatic_upgrade_channel NginxDeployment#automatic_upgrade_channel}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.autoScaleProfile">AutoScaleProfile</a></code> | <code>interface{}</code> | auto_scale_profile block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#capacity NginxDeployment#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.diagnoseSupportEnabled">DiagnoseSupportEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#email NginxDeployment#email}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPrivate">FrontendPrivate</a></code> | <code>interface{}</code> | frontend_private block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPublic">FrontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | frontend_public block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#id NginxDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.loggingStorageAccount">LoggingStorageAccount</a></code> | <code>interface{}</code> | logging_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.managedResourceGroup">ManagedResourceGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#tags NginxDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.webApplicationFirewall">WebApplicationFirewall</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a></code> | web_application_firewall block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#location NginxDeployment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#sku NginxDeployment#sku}.

---

##### `AutomaticUpgradeChannel`<sup>Optional</sup> <a name="AutomaticUpgradeChannel" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.automaticUpgradeChannel"></a>

```go
AutomaticUpgradeChannel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#automatic_upgrade_channel NginxDeployment#automatic_upgrade_channel}.

---

##### `AutoScaleProfile`<sup>Optional</sup> <a name="AutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.autoScaleProfile"></a>

```go
AutoScaleProfile interface{}
```

- *Type:* interface{}

auto_scale_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#auto_scale_profile NginxDeployment#auto_scale_profile}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#capacity NginxDeployment#capacity}.

---

##### `DiagnoseSupportEnabled`<sup>Optional</sup> <a name="DiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.diagnoseSupportEnabled"></a>

```go
DiagnoseSupportEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#email NginxDeployment#email}.

---

##### `FrontendPrivate`<sup>Optional</sup> <a name="FrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPrivate"></a>

```go
FrontendPrivate interface{}
```

- *Type:* interface{}

frontend_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#frontend_private NginxDeployment#frontend_private}

---

##### `FrontendPublic`<sup>Optional</sup> <a name="FrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPublic"></a>

```go
FrontendPublic NginxDeploymentFrontendPublic
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

frontend_public block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#frontend_public NginxDeployment#frontend_public}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#id NginxDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.identity"></a>

```go
Identity NginxDeploymentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#identity NginxDeployment#identity}

---

##### `LoggingStorageAccount`<sup>Optional</sup> <a name="LoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.loggingStorageAccount"></a>

```go
LoggingStorageAccount interface{}
```

- *Type:* interface{}

logging_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#logging_storage_account NginxDeployment#logging_storage_account}

---

##### `ManagedResourceGroup`<sup>Optional</sup> <a name="ManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.managedResourceGroup"></a>

```go
ManagedResourceGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#network_interface NginxDeployment#network_interface}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#tags NginxDeployment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.timeouts"></a>

```go
Timeouts NginxDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#timeouts NginxDeployment#timeouts}

---

##### `WebApplicationFirewall`<sup>Optional</sup> <a name="WebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.webApplicationFirewall"></a>

```go
WebApplicationFirewall NginxDeploymentWebApplicationFirewall
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

web_application_firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#web_application_firewall NginxDeployment#web_application_firewall}

---

### NginxDeploymentFrontendPrivate <a name="NginxDeploymentFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentFrontendPrivate {
	AllocationMethod: *string,
	IpAddress: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.allocationMethod">AllocationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#allocation_method NginxDeployment#allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}. |

---

##### `AllocationMethod`<sup>Required</sup> <a name="AllocationMethod" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.allocationMethod"></a>

```go
AllocationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#allocation_method NginxDeployment#allocation_method}.

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}.

---

### NginxDeploymentFrontendPublic <a name="NginxDeploymentFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentFrontendPublic {
	IpAddress: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.property.ipAddress">IpAddress</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}. |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.property.ipAddress"></a>

```go
IpAddress *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}.

---

### NginxDeploymentIdentity <a name="NginxDeploymentIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#type NginxDeployment#type}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#identity_ids NginxDeployment#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#type NginxDeployment#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#identity_ids NginxDeployment#identity_ids}.

---

### NginxDeploymentLoggingStorageAccount <a name="NginxDeploymentLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentLoggingStorageAccount {
	ContainerName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#container_name NginxDeployment#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#name NginxDeployment#name}. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#container_name NginxDeployment#container_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

### NginxDeploymentNetworkInterface <a name="NginxDeploymentNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentNetworkInterface {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}.

---

### NginxDeploymentTimeouts <a name="NginxDeploymentTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#create NginxDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#delete NginxDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#read NginxDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#update NginxDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#create NginxDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#delete NginxDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#read NginxDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#update NginxDeployment#update}.

---

### NginxDeploymentWebApplicationFirewall <a name="NginxDeploymentWebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentWebApplicationFirewall {
	ActivationStateEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall.property.activationStateEnabled">ActivationStateEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#activation_state_enabled NginxDeployment#activation_state_enabled}. |

---

##### `ActivationStateEnabled`<sup>Required</sup> <a name="ActivationStateEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall.property.activationStateEnabled"></a>

```go
ActivationStateEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/nginx_deployment#activation_state_enabled NginxDeployment#activation_state_enabled}.

---

### NginxDeploymentWebApplicationFirewallStatus <a name="NginxDeploymentWebApplicationFirewallStatus" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentWebApplicationFirewallStatus {

}
```


### NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage <a name="NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage {

}
```


### NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage <a name="NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage {

}
```


### NginxDeploymentWebApplicationFirewallStatusComponentVersions <a name="NginxDeploymentWebApplicationFirewallStatusComponentVersions" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions {

}
```


### NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage <a name="NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

&nginxdeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage {

}
```


## Classes <a name="Classes" id="Classes"></a>

### NginxDeploymentAutoScaleProfileList <a name="NginxDeploymentAutoScaleProfileList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentAutoScaleProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentAutoScaleProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.get"></a>

```go
func Get(index *f64) NginxDeploymentAutoScaleProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentAutoScaleProfileOutputReference <a name="NginxDeploymentAutoScaleProfileOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentAutoScaleProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentAutoScaleProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentFrontendPrivateList <a name="NginxDeploymentFrontendPrivateList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentFrontendPrivateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentFrontendPrivateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get"></a>

```go
func Get(index *f64) NginxDeploymentFrontendPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentFrontendPrivateOutputReference <a name="NginxDeploymentFrontendPrivateOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentFrontendPrivateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentFrontendPrivateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethodInput">AllocationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethod">AllocationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationMethodInput`<sup>Optional</sup> <a name="AllocationMethodInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethodInput"></a>

```go
func AllocationMethodInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AllocationMethod`<sup>Required</sup> <a name="AllocationMethod" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethod"></a>

```go
func AllocationMethod() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentFrontendPublicOutputReference <a name="NginxDeploymentFrontendPublicOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentFrontendPublicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NginxDeploymentFrontendPublicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddress">IpAddress</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddress"></a>

```go
func IpAddress() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentFrontendPublic
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---


### NginxDeploymentIdentityOutputReference <a name="NginxDeploymentIdentityOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NginxDeploymentIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---


### NginxDeploymentLoggingStorageAccountList <a name="NginxDeploymentLoggingStorageAccountList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentLoggingStorageAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentLoggingStorageAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get"></a>

```go
func Get(index *f64) NginxDeploymentLoggingStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentLoggingStorageAccountOutputReference <a name="NginxDeploymentLoggingStorageAccountOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentLoggingStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentLoggingStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentNetworkInterfaceList <a name="NginxDeploymentNetworkInterfaceList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get"></a>

```go
func Get(index *f64) NginxDeploymentNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentNetworkInterfaceOutputReference <a name="NginxDeploymentNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentTimeoutsOutputReference <a name="NginxDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NginxDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NginxDeploymentWebApplicationFirewallOutputReference <a name="NginxDeploymentWebApplicationFirewallOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NginxDeploymentWebApplicationFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList">NginxDeploymentWebApplicationFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabledInput">ActivationStateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabled">ActivationStateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.status"></a>

```go
func Status() NginxDeploymentWebApplicationFirewallStatusList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList">NginxDeploymentWebApplicationFirewallStatusList</a>

---

##### `ActivationStateEnabledInput`<sup>Optional</sup> <a name="ActivationStateEnabledInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabledInput"></a>

```go
func ActivationStateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ActivationStateEnabled`<sup>Required</sup> <a name="ActivationStateEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabled"></a>

```go
func ActivationStateEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentWebApplicationFirewall
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

---


### NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList <a name="NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get"></a>

```go
func Get(index *f64) NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.revisionDatetime">RevisionDatetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionDatetime`<sup>Required</sup> <a name="RevisionDatetime" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.revisionDatetime"></a>

```go
func RevisionDatetime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage</a>

---


### NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList <a name="NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get"></a>

```go
func Get(index *f64) NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.revisionDatetime">RevisionDatetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionDatetime`<sup>Required</sup> <a name="RevisionDatetime" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.revisionDatetime"></a>

```go
func RevisionDatetime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage</a>

---


### NginxDeploymentWebApplicationFirewallStatusComponentVersionsList <a name="NginxDeploymentWebApplicationFirewallStatusComponentVersionsList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusComponentVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentWebApplicationFirewallStatusComponentVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get"></a>

```go
func Get(index *f64) NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafEngineVersion">WafEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafNginxVersion">WafNginxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions">NginxDeploymentWebApplicationFirewallStatusComponentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WafEngineVersion`<sup>Required</sup> <a name="WafEngineVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafEngineVersion"></a>

```go
func WafEngineVersion() *string
```

- *Type:* *string

---

##### `WafNginxVersion`<sup>Required</sup> <a name="WafNginxVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafNginxVersion"></a>

```go
func WafNginxVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentWebApplicationFirewallStatusComponentVersions
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions">NginxDeploymentWebApplicationFirewallStatusComponentVersions</a>

---


### NginxDeploymentWebApplicationFirewallStatusList <a name="NginxDeploymentWebApplicationFirewallStatusList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentWebApplicationFirewallStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.get"></a>

```go
func Get(index *f64) NginxDeploymentWebApplicationFirewallStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NginxDeploymentWebApplicationFirewallStatusOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentWebApplicationFirewallStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.attackSignaturesPackage">AttackSignaturesPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.botSignaturesPackage">BotSignaturesPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.componentVersions">ComponentVersions</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList">NginxDeploymentWebApplicationFirewallStatusComponentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.threatCampaignsPackage">ThreatCampaignsPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus">NginxDeploymentWebApplicationFirewallStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttackSignaturesPackage`<sup>Required</sup> <a name="AttackSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.attackSignaturesPackage"></a>

```go
func AttackSignaturesPackage() NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList</a>

---

##### `BotSignaturesPackage`<sup>Required</sup> <a name="BotSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.botSignaturesPackage"></a>

```go
func BotSignaturesPackage() NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList</a>

---

##### `ComponentVersions`<sup>Required</sup> <a name="ComponentVersions" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.componentVersions"></a>

```go
func ComponentVersions() NginxDeploymentWebApplicationFirewallStatusComponentVersionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList">NginxDeploymentWebApplicationFirewallStatusComponentVersionsList</a>

---

##### `ThreatCampaignsPackage`<sup>Required</sup> <a name="ThreatCampaignsPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.threatCampaignsPackage"></a>

```go
func ThreatCampaignsPackage() NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentWebApplicationFirewallStatus
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus">NginxDeploymentWebApplicationFirewallStatus</a>

---


### NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList <a name="NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get"></a>

```go
func Get(index *f64) NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/nginxdeployment"

nginxdeployment.NewNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.revisionDatetime">RevisionDatetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionDatetime`<sup>Required</sup> <a name="RevisionDatetime" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.revisionDatetime"></a>

```go
func RevisionDatetime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage</a>

---



