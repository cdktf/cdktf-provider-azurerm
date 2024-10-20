# `mssqlManagedInstance` Submodule <a name="`mssqlManagedInstance` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstance <a name="MssqlManagedInstance" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance azurerm_mssql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.NewMssqlManagedInstance(scope Construct, id *string, config MssqlManagedInstanceConfig) MssqlManagedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig">MssqlManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig">MssqlManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDnsZonePartnerId">ResetDnsZonePartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMaintenanceConfigurationName">ResetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetProxyOverride">ResetProxyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetPublicDataEndpointEnabled">ResetPublicDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetServicePrincipalType">ResetServicePrincipalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetZoneRedundantEnabled">ResetZoneRedundantEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity"></a>

```go
func PutIdentity(value MssqlManagedInstanceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts"></a>

```go
func PutTimeouts(value MssqlManagedInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetCollation"></a>

```go
func ResetCollation()
```

##### `ResetDnsZonePartnerId` <a name="ResetDnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDnsZonePartnerId"></a>

```go
func ResetDnsZonePartnerId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetMaintenanceConfigurationName` <a name="ResetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMaintenanceConfigurationName"></a>

```go
func ResetMaintenanceConfigurationName()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMinimumTlsVersion"></a>

```go
func ResetMinimumTlsVersion()
```

##### `ResetProxyOverride` <a name="ResetProxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetProxyOverride"></a>

```go
func ResetProxyOverride()
```

##### `ResetPublicDataEndpointEnabled` <a name="ResetPublicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetPublicDataEndpointEnabled"></a>

```go
func ResetPublicDataEndpointEnabled()
```

##### `ResetServicePrincipalType` <a name="ResetServicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetServicePrincipalType"></a>

```go
func ResetServicePrincipalType()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageAccountType"></a>

```go
func ResetStorageAccountType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimezoneId"></a>

```go
func ResetTimezoneId()
```

##### `ResetZoneRedundantEnabled` <a name="ResetZoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetZoneRedundantEnabled"></a>

```go
func ResetZoneRedundantEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.MssqlManagedInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.MssqlManagedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.MssqlManagedInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.MssqlManagedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZone">DnsZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference">MssqlManagedInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference">MssqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerIdInput">DnsZonePartnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationNameInput">MaintenanceConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverrideInput">ProxyOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabledInput">PublicDataEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalTypeInput">ServicePrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGbInput">StorageSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcoresInput">VcoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabledInput">ZoneRedundantEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerId">DnsZonePartnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverride">ProxyOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabled">PublicDataEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalType">ServicePrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGb">StorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcores">Vcores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabled">ZoneRedundantEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsZone`<sup>Required</sup> <a name="DnsZone" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZone"></a>

```go
func DnsZone() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identity"></a>

```go
func Identity() MssqlManagedInstanceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference">MssqlManagedInstanceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeouts"></a>

```go
func Timeouts() MssqlManagedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference">MssqlManagedInstanceTimeoutsOutputReference</a>

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPasswordInput"></a>

```go
func AdministratorLoginPasswordInput() *string
```

- *Type:* *string

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `DnsZonePartnerIdInput`<sup>Optional</sup> <a name="DnsZonePartnerIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerIdInput"></a>

```go
func DnsZonePartnerIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identityInput"></a>

```go
func IdentityInput() MssqlManagedInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationNameInput`<sup>Optional</sup> <a name="MaintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationNameInput"></a>

```go
func MaintenanceConfigurationNameInput() *string
```

- *Type:* *string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersionInput"></a>

```go
func MinimumTlsVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProxyOverrideInput`<sup>Optional</sup> <a name="ProxyOverrideInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverrideInput"></a>

```go
func ProxyOverrideInput() *string
```

- *Type:* *string

---

##### `PublicDataEndpointEnabledInput`<sup>Optional</sup> <a name="PublicDataEndpointEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabledInput"></a>

```go
func PublicDataEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalTypeInput`<sup>Optional</sup> <a name="ServicePrincipalTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalTypeInput"></a>

```go
func ServicePrincipalTypeInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `StorageSizeInGbInput`<sup>Optional</sup> <a name="StorageSizeInGbInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGbInput"></a>

```go
func StorageSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `VcoresInput`<sup>Optional</sup> <a name="VcoresInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcoresInput"></a>

```go
func VcoresInput() *f64
```

- *Type:* *f64

---

##### `ZoneRedundantEnabledInput`<sup>Optional</sup> <a name="ZoneRedundantEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabledInput"></a>

```go
func ZoneRedundantEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPassword"></a>

```go
func AdministratorLoginPassword() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `DnsZonePartnerId`<sup>Required</sup> <a name="DnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerId"></a>

```go
func DnsZonePartnerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationName`<sup>Required</sup> <a name="MaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationName"></a>

```go
func MaintenanceConfigurationName() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProxyOverride`<sup>Required</sup> <a name="ProxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverride"></a>

```go
func ProxyOverride() *string
```

- *Type:* *string

---

##### `PublicDataEndpointEnabled`<sup>Required</sup> <a name="PublicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabled"></a>

```go
func PublicDataEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServicePrincipalType`<sup>Required</sup> <a name="ServicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalType"></a>

```go
func ServicePrincipalType() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `StorageSizeInGb`<sup>Required</sup> <a name="StorageSizeInGb" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGb"></a>

```go
func StorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `Vcores`<sup>Required</sup> <a name="Vcores" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcores"></a>

```go
func Vcores() *f64
```

- *Type:* *f64

---

##### `ZoneRedundantEnabled`<sup>Required</sup> <a name="ZoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabled"></a>

```go
func ZoneRedundantEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceConfig <a name="MssqlManagedInstanceConfig" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

&mssqlmanagedinstance.MssqlManagedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdministratorLogin: *string,
	AdministratorLoginPassword: *string,
	LicenseType: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	StorageSizeInGb: *f64,
	SubnetId: *string,
	Vcores: *f64,
	Collation: *string,
	DnsZonePartnerId: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity,
	MaintenanceConfigurationName: *string,
	MinimumTlsVersion: *string,
	ProxyOverride: *string,
	PublicDataEndpointEnabled: interface{},
	ServicePrincipalType: *string,
	StorageAccountType: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts,
	TimezoneId: *string,
	ZoneRedundantEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageSizeInGb">StorageSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.vcores">Vcores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.collation">Collation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dnsZonePartnerId">DnsZonePartnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.proxyOverride">ProxyOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.publicDataEndpointEnabled">PublicDataEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.servicePrincipalType">ServicePrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.zoneRedundantEnabled">ZoneRedundantEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}.

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLoginPassword"></a>

```go
AdministratorLoginPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}.

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}.

---

##### `StorageSizeInGb`<sup>Required</sup> <a name="StorageSizeInGb" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageSizeInGb"></a>

```go
StorageSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}.

---

##### `Vcores`<sup>Required</sup> <a name="Vcores" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.vcores"></a>

```go
Vcores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}.

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}.

---

##### `DnsZonePartnerId`<sup>Optional</sup> <a name="DnsZonePartnerId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dnsZonePartnerId"></a>

```go
DnsZonePartnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.identity"></a>

```go
Identity MssqlManagedInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#identity MssqlManagedInstance#identity}

---

##### `MaintenanceConfigurationName`<sup>Optional</sup> <a name="MaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.maintenanceConfigurationName"></a>

```go
MaintenanceConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}.

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.minimumTlsVersion"></a>

```go
MinimumTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}.

---

##### `ProxyOverride`<sup>Optional</sup> <a name="ProxyOverride" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.proxyOverride"></a>

```go
ProxyOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}.

---

##### `PublicDataEndpointEnabled`<sup>Optional</sup> <a name="PublicDataEndpointEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.publicDataEndpointEnabled"></a>

```go
PublicDataEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}.

---

##### `ServicePrincipalType`<sup>Optional</sup> <a name="ServicePrincipalType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.servicePrincipalType"></a>

```go
ServicePrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timeouts"></a>

```go
Timeouts MssqlManagedInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#timeouts MssqlManagedInstance#timeouts}

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}.

---

##### `ZoneRedundantEnabled`<sup>Optional</sup> <a name="ZoneRedundantEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.zoneRedundantEnabled"></a>

```go
ZoneRedundantEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}.

---

### MssqlManagedInstanceIdentity <a name="MssqlManagedInstanceIdentity" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

&mssqlmanagedinstance.MssqlManagedInstanceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#type MssqlManagedInstance#type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#identity_ids MssqlManagedInstance#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#type MssqlManagedInstance#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#identity_ids MssqlManagedInstance#identity_ids}.

---

### MssqlManagedInstanceTimeouts <a name="MssqlManagedInstanceTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

&mssqlmanagedinstance.MssqlManagedInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#create MssqlManagedInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#delete MssqlManagedInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#read MssqlManagedInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#update MssqlManagedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#create MssqlManagedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#delete MssqlManagedInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#read MssqlManagedInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/mssql_managed_instance#update MssqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceIdentityOutputReference <a name="MssqlManagedInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.NewMssqlManagedInstanceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlManagedInstanceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlManagedInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---


### MssqlManagedInstanceTimeoutsOutputReference <a name="MssqlManagedInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstance"

mssqlmanagedinstance.NewMssqlManagedInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlManagedInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



