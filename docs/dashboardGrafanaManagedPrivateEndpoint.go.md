# `dashboardGrafanaManagedPrivateEndpoint` Submodule <a name="`dashboardGrafanaManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardGrafanaManagedPrivateEndpoint <a name="DashboardGrafanaManagedPrivateEndpoint" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint azurerm_dashboard_grafana_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

dashboardgrafanamanagedprivateendpoint.NewDashboardGrafanaManagedPrivateEndpoint(scope Construct, id *string, config DashboardGrafanaManagedPrivateEndpointConfig) DashboardGrafanaManagedPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig">DashboardGrafanaManagedPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig">DashboardGrafanaManagedPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetGroupIds">ResetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkResourceRegion">ResetPrivateLinkResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkServiceUrl">ResetPrivateLinkServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value DashboardGrafanaManagedPrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

---

##### `ResetGroupIds` <a name="ResetGroupIds" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetGroupIds"></a>

```go
func ResetGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateLinkResourceRegion` <a name="ResetPrivateLinkResourceRegion" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkResourceRegion"></a>

```go
func ResetPrivateLinkResourceRegion()
```

##### `ResetPrivateLinkServiceUrl` <a name="ResetPrivateLinkServiceUrl" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkServiceUrl"></a>

```go
func ResetPrivateLinkServiceUrl()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetRequestMessage"></a>

```go
func ResetRequestMessage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

dashboardgrafanamanagedprivateendpoint.DashboardGrafanaManagedPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

dashboardgrafanamanagedprivateendpoint.DashboardGrafanaManagedPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

dashboardgrafanamanagedprivateendpoint.DashboardGrafanaManagedPrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

dashboardgrafanamanagedprivateendpoint.DashboardGrafanaManagedPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DashboardGrafanaManagedPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DashboardGrafanaManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DashboardGrafanaManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference">DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaIdInput">GrafanaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIdsInput">GroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceIdInput">PrivateLinkResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegionInput">PrivateLinkResourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrlInput">PrivateLinkServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessageInput">RequestMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaId">GrafanaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIds">GroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceId">PrivateLinkResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegion">PrivateLinkResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrl">PrivateLinkServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference">DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `GrafanaIdInput`<sup>Optional</sup> <a name="GrafanaIdInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaIdInput"></a>

```go
func GrafanaIdInput() *string
```

- *Type:* *string

---

##### `GroupIdsInput`<sup>Optional</sup> <a name="GroupIdsInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIdsInput"></a>

```go
func GroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceIdInput`<sup>Optional</sup> <a name="PrivateLinkResourceIdInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceIdInput"></a>

```go
func PrivateLinkResourceIdInput() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceRegionInput`<sup>Optional</sup> <a name="PrivateLinkResourceRegionInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegionInput"></a>

```go
func PrivateLinkResourceRegionInput() *string
```

- *Type:* *string

---

##### `PrivateLinkServiceUrlInput`<sup>Optional</sup> <a name="PrivateLinkServiceUrlInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrlInput"></a>

```go
func PrivateLinkServiceUrlInput() *string
```

- *Type:* *string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessageInput"></a>

```go
func RequestMessageInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `GrafanaId`<sup>Required</sup> <a name="GrafanaId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaId"></a>

```go
func GrafanaId() *string
```

- *Type:* *string

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIds"></a>

```go
func GroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceId`<sup>Required</sup> <a name="PrivateLinkResourceId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceId"></a>

```go
func PrivateLinkResourceId() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceRegion`<sup>Required</sup> <a name="PrivateLinkResourceRegion" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegion"></a>

```go
func PrivateLinkResourceRegion() *string
```

- *Type:* *string

---

##### `PrivateLinkServiceUrl`<sup>Required</sup> <a name="PrivateLinkServiceUrl" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrl"></a>

```go
func PrivateLinkServiceUrl() *string
```

- *Type:* *string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessage"></a>

```go
func RequestMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardGrafanaManagedPrivateEndpointConfig <a name="DashboardGrafanaManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

&dashboardgrafanamanagedprivateendpoint.DashboardGrafanaManagedPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GrafanaId: *string,
	Location: *string,
	Name: *string,
	PrivateLinkResourceId: *string,
	GroupIds: *[]*string,
	Id: *string,
	PrivateLinkResourceRegion: *string,
	PrivateLinkServiceUrl: *string,
	RequestMessage: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.grafanaId">GrafanaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceId">PrivateLinkResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.groupIds">GroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceRegion">PrivateLinkResourceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkServiceUrl">PrivateLinkServiceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GrafanaId`<sup>Required</sup> <a name="GrafanaId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.grafanaId"></a>

```go
GrafanaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}.

---

##### `PrivateLinkResourceId`<sup>Required</sup> <a name="PrivateLinkResourceId" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceId"></a>

```go
PrivateLinkResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}.

---

##### `GroupIds`<sup>Optional</sup> <a name="GroupIds" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.groupIds"></a>

```go
GroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateLinkResourceRegion`<sup>Optional</sup> <a name="PrivateLinkResourceRegion" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceRegion"></a>

```go
PrivateLinkResourceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}.

---

##### `PrivateLinkServiceUrl`<sup>Optional</sup> <a name="PrivateLinkServiceUrl" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkServiceUrl"></a>

```go
PrivateLinkServiceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.requestMessage"></a>

```go
RequestMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts DashboardGrafanaManagedPrivateEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#timeouts DashboardGrafanaManagedPrivateEndpoint#timeouts}

---

### DashboardGrafanaManagedPrivateEndpointTimeouts <a name="DashboardGrafanaManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

&dashboardgrafanamanagedprivateendpoint.DashboardGrafanaManagedPrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference <a name="DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dashboardgrafanamanagedprivateendpoint"

dashboardgrafanamanagedprivateendpoint.NewDashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



