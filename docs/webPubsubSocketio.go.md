# `webPubsubSocketio` Submodule <a name="`webPubsubSocketio` Submodule" id="@cdktf/provider-azurerm.webPubsubSocketio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSocketio <a name="WebPubsubSocketio" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio azurerm_web_pubsub_socketio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.NewWebPubsubSocketio(scope Construct, id *string, config WebPubsubSocketioConfig) WebPubsubSocketio
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig">WebPubsubSocketioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig">WebPubsubSocketioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled">ResetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled">ResetLiveTraceConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled">ResetLiveTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled">ResetLiveTraceHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled">ResetLiveTraceMessagingLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess">ResetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode">ResetServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled">ResetTlsClientCertEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity"></a>

```go
func PutIdentity(value WebPubsubSocketioIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku"></a>

```go
func PutSku(value WebPubsubSocketioSku)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts"></a>

```go
func PutTimeouts(value WebPubsubSocketioTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---

##### `ResetAadAuthEnabled` <a name="ResetAadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled"></a>

```go
func ResetAadAuthEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLiveTraceConnectivityLogsEnabled` <a name="ResetLiveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled"></a>

```go
func ResetLiveTraceConnectivityLogsEnabled()
```

##### `ResetLiveTraceEnabled` <a name="ResetLiveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled"></a>

```go
func ResetLiveTraceEnabled()
```

##### `ResetLiveTraceHttpRequestLogsEnabled` <a name="ResetLiveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled"></a>

```go
func ResetLiveTraceHttpRequestLogsEnabled()
```

##### `ResetLiveTraceMessagingLogsEnabled` <a name="ResetLiveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled"></a>

```go
func ResetLiveTraceMessagingLogsEnabled()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetPublicNetworkAccess` <a name="ResetPublicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess"></a>

```go
func ResetPublicNetworkAccess()
```

##### `ResetServiceMode` <a name="ResetServiceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode"></a>

```go
func ResetServiceMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsClientCertEnabled` <a name="ResetTlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled"></a>

```go
func ResetTlsClientCertEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.WebPubsubSocketio_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.WebPubsubSocketio_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.WebPubsubSocketio_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.WebPubsubSocketio_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WebPubsubSocketio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WebPubsubSocketio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubSocketio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp">ExternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort">PublicPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort">ServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput">AadAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput">LiveTraceConnectivityLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput">LiveTraceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput">LiveTraceHttpRequestLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput">LiveTraceMessagingLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput">PublicNetworkAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput">ServiceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput">TlsClientCertEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled">LiveTraceConnectivityLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled">LiveTraceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled">LiveTraceHttpRequestLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled">LiveTraceMessagingLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode">ServiceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp"></a>

```go
func ExternalIp() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity"></a>

```go
func Identity() WebPubsubSocketioIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort"></a>

```go
func PublicPort() *f64
```

- *Type:* *f64

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort"></a>

```go
func ServerPort() *f64
```

- *Type:* *f64

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku"></a>

```go
func Sku() WebPubsubSocketioSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts"></a>

```go
func Timeouts() WebPubsubSocketioTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a>

---

##### `AadAuthEnabledInput`<sup>Optional</sup> <a name="AadAuthEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput"></a>

```go
func AadAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput"></a>

```go
func IdentityInput() WebPubsubSocketioIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LiveTraceConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="LiveTraceConnectivityLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput"></a>

```go
func LiveTraceConnectivityLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceEnabledInput`<sup>Optional</sup> <a name="LiveTraceEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput"></a>

```go
func LiveTraceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceHttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="LiveTraceHttpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput"></a>

```go
func LiveTraceHttpRequestLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceMessagingLogsEnabledInput`<sup>Optional</sup> <a name="LiveTraceMessagingLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput"></a>

```go
func LiveTraceMessagingLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessInput`<sup>Optional</sup> <a name="PublicNetworkAccessInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput"></a>

```go
func PublicNetworkAccessInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServiceModeInput`<sup>Optional</sup> <a name="ServiceModeInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput"></a>

```go
func ServiceModeInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput"></a>

```go
func SkuInput() WebPubsubSocketioSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsClientCertEnabledInput`<sup>Optional</sup> <a name="TlsClientCertEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput"></a>

```go
func TlsClientCertEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled"></a>

```go
func AadAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LiveTraceConnectivityLogsEnabled`<sup>Required</sup> <a name="LiveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled"></a>

```go
func LiveTraceConnectivityLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceEnabled`<sup>Required</sup> <a name="LiveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled"></a>

```go
func LiveTraceEnabled() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceHttpRequestLogsEnabled`<sup>Required</sup> <a name="LiveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled"></a>

```go
func LiveTraceHttpRequestLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceMessagingLogsEnabled`<sup>Required</sup> <a name="LiveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled"></a>

```go
func LiveTraceMessagingLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess"></a>

```go
func PublicNetworkAccess() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceMode`<sup>Required</sup> <a name="ServiceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode"></a>

```go
func ServiceMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled"></a>

```go
func TlsClientCertEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSocketioConfig <a name="WebPubsubSocketioConfig" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

&webpubsubsocketio.WebPubsubSocketioConfig {
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
	Sku: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.webPubsubSocketio.WebPubsubSocketioSku,
	AadAuthEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.webPubsubSocketio.WebPubsubSocketioIdentity,
	LiveTraceConnectivityLogsEnabled: interface{},
	LiveTraceEnabled: interface{},
	LiveTraceHttpRequestLogsEnabled: interface{},
	LiveTraceMessagingLogsEnabled: interface{},
	LocalAuthEnabled: interface{},
	PublicNetworkAccess: *string,
	ServiceMode: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.webPubsubSocketio.WebPubsubSocketioTimeouts,
	TlsClientCertEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled">LiveTraceConnectivityLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled">LiveTraceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled">LiveTraceHttpRequestLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled">LiveTraceMessagingLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode">ServiceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku"></a>

```go
Sku WebPubsubSocketioSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}

---

##### `AadAuthEnabled`<sup>Optional</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled"></a>

```go
AadAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity"></a>

```go
Identity WebPubsubSocketioIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}

---

##### `LiveTraceConnectivityLogsEnabled`<sup>Optional</sup> <a name="LiveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled"></a>

```go
LiveTraceConnectivityLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}.

---

##### `LiveTraceEnabled`<sup>Optional</sup> <a name="LiveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled"></a>

```go
LiveTraceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}.

---

##### `LiveTraceHttpRequestLogsEnabled`<sup>Optional</sup> <a name="LiveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled"></a>

```go
LiveTraceHttpRequestLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}.

---

##### `LiveTraceMessagingLogsEnabled`<sup>Optional</sup> <a name="LiveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled"></a>

```go
LiveTraceMessagingLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}.

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}.

---

##### `PublicNetworkAccess`<sup>Optional</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess"></a>

```go
PublicNetworkAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}.

---

##### `ServiceMode`<sup>Optional</sup> <a name="ServiceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode"></a>

```go
ServiceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts"></a>

```go
Timeouts WebPubsubSocketioTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}

---

##### `TlsClientCertEnabled`<sup>Optional</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled"></a>

```go
TlsClientCertEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}.

---

### WebPubsubSocketioIdentity <a name="WebPubsubSocketioIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

&webpubsubsocketio.WebPubsubSocketioIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}.

---

### WebPubsubSocketioSku <a name="WebPubsubSocketioSku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

&webpubsubsocketio.WebPubsubSocketioSku {
	Name: *string,
	Capacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}.

---

### WebPubsubSocketioTimeouts <a name="WebPubsubSocketioTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

&webpubsubsocketio.WebPubsubSocketioTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSocketioIdentityOutputReference <a name="WebPubsubSocketioIdentityOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.NewWebPubsubSocketioIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubSocketioIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() WebPubsubSocketioIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---


### WebPubsubSocketioSkuOutputReference <a name="WebPubsubSocketioSkuOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.NewWebPubsubSocketioSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubSocketioSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity"></a>

```go
func ResetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() WebPubsubSocketioSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---


### WebPubsubSocketioTimeoutsOutputReference <a name="WebPubsubSocketioTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/webpubsubsocketio"

webpubsubsocketio.NewWebPubsubSocketioTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubSocketioTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



