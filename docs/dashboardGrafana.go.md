# `dashboardGrafana` Submodule <a name="`dashboardGrafana` Submodule" id="@cdktf/provider-azurerm.dashboardGrafana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardGrafana <a name="DashboardGrafana" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana azurerm_dashboard_grafana}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.NewDashboardGrafana(scope Construct, id *string, config DashboardGrafanaConfig) DashboardGrafana
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig">DashboardGrafanaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig">DashboardGrafanaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations">PutAzureMonitorWorkspaceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp">PutSmtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetApiKeyEnabled">ResetApiKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAutoGeneratedDomainNameLabelScope">ResetAutoGeneratedDomainNameLabelScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAzureMonitorWorkspaceIntegrations">ResetAzureMonitorWorkspaceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetDeterministicOutboundIpEnabled">ResetDeterministicOutboundIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSmtp">ResetSmtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetZoneRedundancyEnabled">ResetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureMonitorWorkspaceIntegrations` <a name="PutAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations"></a>

```go
func PutAzureMonitorWorkspaceIntegrations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity"></a>

```go
func PutIdentity(value DashboardGrafanaIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---

##### `PutSmtp` <a name="PutSmtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp"></a>

```go
func PutSmtp(value DashboardGrafanaSmtp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts"></a>

```go
func PutTimeouts(value DashboardGrafanaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>

---

##### `ResetApiKeyEnabled` <a name="ResetApiKeyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetApiKeyEnabled"></a>

```go
func ResetApiKeyEnabled()
```

##### `ResetAutoGeneratedDomainNameLabelScope` <a name="ResetAutoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAutoGeneratedDomainNameLabelScope"></a>

```go
func ResetAutoGeneratedDomainNameLabelScope()
```

##### `ResetAzureMonitorWorkspaceIntegrations` <a name="ResetAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAzureMonitorWorkspaceIntegrations"></a>

```go
func ResetAzureMonitorWorkspaceIntegrations()
```

##### `ResetDeterministicOutboundIpEnabled` <a name="ResetDeterministicOutboundIpEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetDeterministicOutboundIpEnabled"></a>

```go
func ResetDeterministicOutboundIpEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSku"></a>

```go
func ResetSku()
```

##### `ResetSmtp` <a name="ResetSmtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSmtp"></a>

```go
func ResetSmtp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZoneRedundancyEnabled` <a name="ResetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetZoneRedundancyEnabled"></a>

```go
func ResetZoneRedundancyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DashboardGrafana resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.DashboardGrafana_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.DashboardGrafana_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.DashboardGrafana_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.DashboardGrafana_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DashboardGrafana resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DashboardGrafana to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DashboardGrafana that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DashboardGrafana to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrations">AzureMonitorWorkspaceIntegrations</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaVersion">GrafanaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference">DashboardGrafanaIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.outboundIp">OutboundIp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtp">Smtp</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference">DashboardGrafanaSmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference">DashboardGrafanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabledInput">ApiKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScopeInput">AutoGeneratedDomainNameLabelScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrationsInput">AzureMonitorWorkspaceIntegrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabledInput">DeterministicOutboundIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersionInput">GrafanaMajorVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtpInput">SmtpInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabledInput">ZoneRedundancyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabled">ApiKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScope">AutoGeneratedDomainNameLabelScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabled">DeterministicOutboundIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersion">GrafanaMajorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureMonitorWorkspaceIntegrations`<sup>Required</sup> <a name="AzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrations"></a>

```go
func AzureMonitorWorkspaceIntegrations() DashboardGrafanaAzureMonitorWorkspaceIntegrationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `GrafanaVersion`<sup>Required</sup> <a name="GrafanaVersion" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaVersion"></a>

```go
func GrafanaVersion() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identity"></a>

```go
func Identity() DashboardGrafanaIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference">DashboardGrafanaIdentityOutputReference</a>

---

##### `OutboundIp`<sup>Required</sup> <a name="OutboundIp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.outboundIp"></a>

```go
func OutboundIp() *[]*string
```

- *Type:* *[]*string

---

##### `Smtp`<sup>Required</sup> <a name="Smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtp"></a>

```go
func Smtp() DashboardGrafanaSmtpOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference">DashboardGrafanaSmtpOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeouts"></a>

```go
func Timeouts() DashboardGrafanaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference">DashboardGrafanaTimeoutsOutputReference</a>

---

##### `ApiKeyEnabledInput`<sup>Optional</sup> <a name="ApiKeyEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabledInput"></a>

```go
func ApiKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoGeneratedDomainNameLabelScopeInput`<sup>Optional</sup> <a name="AutoGeneratedDomainNameLabelScopeInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScopeInput"></a>

```go
func AutoGeneratedDomainNameLabelScopeInput() *string
```

- *Type:* *string

---

##### `AzureMonitorWorkspaceIntegrationsInput`<sup>Optional</sup> <a name="AzureMonitorWorkspaceIntegrationsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrationsInput"></a>

```go
func AzureMonitorWorkspaceIntegrationsInput() interface{}
```

- *Type:* interface{}

---

##### `DeterministicOutboundIpEnabledInput`<sup>Optional</sup> <a name="DeterministicOutboundIpEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabledInput"></a>

```go
func DeterministicOutboundIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GrafanaMajorVersionInput`<sup>Optional</sup> <a name="GrafanaMajorVersionInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersionInput"></a>

```go
func GrafanaMajorVersionInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identityInput"></a>

```go
func IdentityInput() DashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `SmtpInput`<sup>Optional</sup> <a name="SmtpInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtpInput"></a>

```go
func SmtpInput() DashboardGrafanaSmtp
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneRedundancyEnabledInput`<sup>Optional</sup> <a name="ZoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabledInput"></a>

```go
func ZoneRedundancyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApiKeyEnabled`<sup>Required</sup> <a name="ApiKeyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabled"></a>

```go
func ApiKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoGeneratedDomainNameLabelScope`<sup>Required</sup> <a name="AutoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScope"></a>

```go
func AutoGeneratedDomainNameLabelScope() *string
```

- *Type:* *string

---

##### `DeterministicOutboundIpEnabled`<sup>Required</sup> <a name="DeterministicOutboundIpEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabled"></a>

```go
func DeterministicOutboundIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `GrafanaMajorVersion`<sup>Required</sup> <a name="GrafanaMajorVersion" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersion"></a>

```go
func GrafanaMajorVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneRedundancyEnabled`<sup>Required</sup> <a name="ZoneRedundancyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabled"></a>

```go
func ZoneRedundancyEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardGrafanaAzureMonitorWorkspaceIntegrations <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

&dashboardgrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations {
	ResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#resource_id DashboardGrafana#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#resource_id DashboardGrafana#resource_id}.

---

### DashboardGrafanaConfig <a name="DashboardGrafanaConfig" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

&dashboardgrafana.DashboardGrafanaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GrafanaMajorVersion: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	ApiKeyEnabled: interface{},
	AutoGeneratedDomainNameLabelScope: *string,
	AzureMonitorWorkspaceIntegrations: interface{},
	DeterministicOutboundIpEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dashboardGrafana.DashboardGrafanaIdentity,
	PublicNetworkAccessEnabled: interface{},
	Sku: *string,
	Smtp: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dashboardGrafana.DashboardGrafanaSmtp,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dashboardGrafana.DashboardGrafanaTimeouts,
	ZoneRedundancyEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.grafanaMajorVersion">GrafanaMajorVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#grafana_major_version DashboardGrafana#grafana_major_version}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.apiKeyEnabled">ApiKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.autoGeneratedDomainNameLabelScope">AutoGeneratedDomainNameLabelScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.azureMonitorWorkspaceIntegrations">AzureMonitorWorkspaceIntegrations</a></code> | <code>interface{}</code> | azure_monitor_workspace_integrations block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.deterministicOutboundIpEnabled">DeterministicOutboundIpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.smtp">Smtp</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | smtp block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GrafanaMajorVersion`<sup>Required</sup> <a name="GrafanaMajorVersion" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.grafanaMajorVersion"></a>

```go
GrafanaMajorVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#grafana_major_version DashboardGrafana#grafana_major_version}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}.

---

##### `ApiKeyEnabled`<sup>Optional</sup> <a name="ApiKeyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.apiKeyEnabled"></a>

```go
ApiKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}.

---

##### `AutoGeneratedDomainNameLabelScope`<sup>Optional</sup> <a name="AutoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.autoGeneratedDomainNameLabelScope"></a>

```go
AutoGeneratedDomainNameLabelScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}.

---

##### `AzureMonitorWorkspaceIntegrations`<sup>Optional</sup> <a name="AzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.azureMonitorWorkspaceIntegrations"></a>

```go
AzureMonitorWorkspaceIntegrations interface{}
```

- *Type:* interface{}

azure_monitor_workspace_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#azure_monitor_workspace_integrations DashboardGrafana#azure_monitor_workspace_integrations}

---

##### `DeterministicOutboundIpEnabled`<sup>Optional</sup> <a name="DeterministicOutboundIpEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.deterministicOutboundIpEnabled"></a>

```go
DeterministicOutboundIpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.identity"></a>

```go
Identity DashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#identity DashboardGrafana#identity}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}.

---

##### `Smtp`<sup>Optional</sup> <a name="Smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.smtp"></a>

```go
Smtp DashboardGrafanaSmtp
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

smtp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#smtp DashboardGrafana#smtp}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.timeouts"></a>

```go
Timeouts DashboardGrafanaTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#timeouts DashboardGrafana#timeouts}

---

##### `ZoneRedundancyEnabled`<sup>Optional</sup> <a name="ZoneRedundancyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.zoneRedundancyEnabled"></a>

```go
ZoneRedundancyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}.

---

### DashboardGrafanaIdentity <a name="DashboardGrafanaIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

&dashboardgrafana.DashboardGrafanaIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}.

---

### DashboardGrafanaSmtp <a name="DashboardGrafanaSmtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

&dashboardgrafana.DashboardGrafanaSmtp {
	FromAddress: *string,
	Host: *string,
	Password: *string,
	StartTlsPolicy: *string,
	User: *string,
	Enabled: interface{},
	FromName: *string,
	VerificationSkipEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromAddress">FromAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#from_address DashboardGrafana#from_address}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#host DashboardGrafana#host}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#password DashboardGrafana#password}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.startTlsPolicy">StartTlsPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#start_tls_policy DashboardGrafana#start_tls_policy}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#user DashboardGrafana#user}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#enabled DashboardGrafana#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromName">FromName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#from_name DashboardGrafana#from_name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.verificationSkipEnabled">VerificationSkipEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#verification_skip_enabled DashboardGrafana#verification_skip_enabled}. |

---

##### `FromAddress`<sup>Required</sup> <a name="FromAddress" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromAddress"></a>

```go
FromAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#from_address DashboardGrafana#from_address}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#host DashboardGrafana#host}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#password DashboardGrafana#password}.

---

##### `StartTlsPolicy`<sup>Required</sup> <a name="StartTlsPolicy" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.startTlsPolicy"></a>

```go
StartTlsPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#start_tls_policy DashboardGrafana#start_tls_policy}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#user DashboardGrafana#user}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#enabled DashboardGrafana#enabled}.

---

##### `FromName`<sup>Optional</sup> <a name="FromName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromName"></a>

```go
FromName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#from_name DashboardGrafana#from_name}.

---

##### `VerificationSkipEnabled`<sup>Optional</sup> <a name="VerificationSkipEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.verificationSkipEnabled"></a>

```go
VerificationSkipEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#verification_skip_enabled DashboardGrafana#verification_skip_enabled}.

---

### DashboardGrafanaTimeouts <a name="DashboardGrafanaTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

&dashboardgrafana.DashboardGrafanaTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardGrafanaAzureMonitorWorkspaceIntegrationsList <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrationsList" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.NewDashboardGrafanaAzureMonitorWorkspaceIntegrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DashboardGrafanaAzureMonitorWorkspaceIntegrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get"></a>

```go
func Get(index *f64) DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.NewDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DashboardGrafanaIdentityOutputReference <a name="DashboardGrafanaIdentityOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.NewDashboardGrafanaIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DashboardGrafanaIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---


### DashboardGrafanaSmtpOutputReference <a name="DashboardGrafanaSmtpOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.NewDashboardGrafanaSmtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DashboardGrafanaSmtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetFromName">ResetFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetVerificationSkipEnabled">ResetVerificationSkipEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFromName` <a name="ResetFromName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetFromName"></a>

```go
func ResetFromName()
```

##### `ResetVerificationSkipEnabled` <a name="ResetVerificationSkipEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetVerificationSkipEnabled"></a>

```go
func ResetVerificationSkipEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddressInput">FromAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromNameInput">FromNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicyInput">StartTlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabledInput">VerificationSkipEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddress">FromAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromName">FromName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicy">StartTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabled">VerificationSkipEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FromAddressInput`<sup>Optional</sup> <a name="FromAddressInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddressInput"></a>

```go
func FromAddressInput() *string
```

- *Type:* *string

---

##### `FromNameInput`<sup>Optional</sup> <a name="FromNameInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromNameInput"></a>

```go
func FromNameInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `StartTlsPolicyInput`<sup>Optional</sup> <a name="StartTlsPolicyInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicyInput"></a>

```go
func StartTlsPolicyInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `VerificationSkipEnabledInput`<sup>Optional</sup> <a name="VerificationSkipEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabledInput"></a>

```go
func VerificationSkipEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FromAddress`<sup>Required</sup> <a name="FromAddress" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddress"></a>

```go
func FromAddress() *string
```

- *Type:* *string

---

##### `FromName`<sup>Required</sup> <a name="FromName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromName"></a>

```go
func FromName() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `StartTlsPolicy`<sup>Required</sup> <a name="StartTlsPolicy" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicy"></a>

```go
func StartTlsPolicy() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `VerificationSkipEnabled`<sup>Required</sup> <a name="VerificationSkipEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabled"></a>

```go
func VerificationSkipEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.internalValue"></a>

```go
func InternalValue() DashboardGrafanaSmtp
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

---


### DashboardGrafanaTimeoutsOutputReference <a name="DashboardGrafanaTimeoutsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafana"

dashboardgrafana.NewDashboardGrafanaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DashboardGrafanaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



