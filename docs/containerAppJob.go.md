# `containerAppJob` Submodule <a name="`containerAppJob` Submodule" id="@cdktf/provider-azurerm.containerAppJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppJob <a name="ContainerAppJob" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job azurerm_container_app_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJob(scope Construct, id *string, config ContainerAppJobConfig) ContainerAppJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig">ContainerAppJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig">ContainerAppJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig">PutEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig">PutManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry">PutRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig">PutScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig">ResetEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig">ResetManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry">ResetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit">ResetReplicaRetryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig">ResetScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName">ResetWorkloadProfileName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTriggerConfig` <a name="PutEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig"></a>

```go
func PutEventTriggerConfig(value ContainerAppJobEventTriggerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity"></a>

```go
func PutIdentity(value ContainerAppJobIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `PutManualTriggerConfig` <a name="PutManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig"></a>

```go
func PutManualTriggerConfig(value ContainerAppJobManualTriggerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `PutRegistry` <a name="PutRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry"></a>

```go
func PutRegistry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduleTriggerConfig` <a name="PutScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig"></a>

```go
func PutScheduleTriggerConfig(value ContainerAppJobScheduleTriggerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate"></a>

```go
func PutTemplate(value ContainerAppJobTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAppJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

---

##### `ResetEventTriggerConfig` <a name="ResetEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig"></a>

```go
func ResetEventTriggerConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetManualTriggerConfig` <a name="ResetManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig"></a>

```go
func ResetManualTriggerConfig()
```

##### `ResetRegistry` <a name="ResetRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry"></a>

```go
func ResetRegistry()
```

##### `ResetReplicaRetryLimit` <a name="ResetReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit"></a>

```go
func ResetReplicaRetryLimit()
```

##### `ResetScheduleTriggerConfig` <a name="ResetScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig"></a>

```go
func ResetScheduleTriggerConfig()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkloadProfileName` <a name="ResetWorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName"></a>

```go
func ResetWorkloadProfileName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.ContainerAppJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.ContainerAppJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.ContainerAppJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.ContainerAppJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerAppJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerAppJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint">EventStreamEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig">EventTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig">ManualTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry">Registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig">ScheduleTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template">Template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput">EventTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput">ManualTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput">RegistryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput">ReplicaRetryLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput">ReplicaTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput">ScheduleTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput">WorkloadProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit">ReplicaRetryLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds">ReplicaTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName">WorkloadProfileName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventStreamEndpoint`<sup>Required</sup> <a name="EventStreamEndpoint" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint"></a>

```go
func EventStreamEndpoint() *string
```

- *Type:* *string

---

##### `EventTriggerConfig`<sup>Required</sup> <a name="EventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig"></a>

```go
func EventTriggerConfig() ContainerAppJobEventTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity"></a>

```go
func Identity() ContainerAppJobIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a>

---

##### `ManualTriggerConfig`<sup>Required</sup> <a name="ManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig"></a>

```go
func ManualTriggerConfig() ContainerAppJobManualTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a>

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses"></a>

```go
func OutboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry"></a>

```go
func Registry() ContainerAppJobRegistryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a>

---

##### `ScheduleTriggerConfig`<sup>Required</sup> <a name="ScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig"></a>

```go
func ScheduleTriggerConfig() ContainerAppJobScheduleTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret"></a>

```go
func Secret() ContainerAppJobSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template"></a>

```go
func Template() ContainerAppJobTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts"></a>

```go
func Timeouts() ContainerAppJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a>

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput"></a>

```go
func ContainerAppEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `EventTriggerConfigInput`<sup>Optional</sup> <a name="EventTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput"></a>

```go
func EventTriggerConfigInput() ContainerAppJobEventTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput"></a>

```go
func IdentityInput() ContainerAppJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManualTriggerConfigInput`<sup>Optional</sup> <a name="ManualTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput"></a>

```go
func ManualTriggerConfigInput() ContainerAppJobManualTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput"></a>

```go
func RegistryInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicaRetryLimitInput`<sup>Optional</sup> <a name="ReplicaRetryLimitInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput"></a>

```go
func ReplicaRetryLimitInput() *f64
```

- *Type:* *f64

---

##### `ReplicaTimeoutInSecondsInput`<sup>Optional</sup> <a name="ReplicaTimeoutInSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput"></a>

```go
func ReplicaTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScheduleTriggerConfigInput`<sup>Optional</sup> <a name="ScheduleTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput"></a>

```go
func ScheduleTriggerConfigInput() ContainerAppJobScheduleTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput"></a>

```go
func TemplateInput() ContainerAppJobTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadProfileNameInput`<sup>Optional</sup> <a name="WorkloadProfileNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput"></a>

```go
func WorkloadProfileNameInput() *string
```

- *Type:* *string

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId"></a>

```go
func ContainerAppEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplicaRetryLimit`<sup>Required</sup> <a name="ReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit"></a>

```go
func ReplicaRetryLimit() *f64
```

- *Type:* *f64

---

##### `ReplicaTimeoutInSeconds`<sup>Required</sup> <a name="ReplicaTimeoutInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds"></a>

```go
func ReplicaTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkloadProfileName`<sup>Required</sup> <a name="WorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName"></a>

```go
func WorkloadProfileName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppJobConfig <a name="ContainerAppJobConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerAppEnvironmentId: *string,
	Location: *string,
	Name: *string,
	ReplicaTimeoutInSeconds: *f64,
	ResourceGroupName: *string,
	Template: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerAppJob.ContainerAppJobTemplate,
	EventTriggerConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerAppJob.ContainerAppJobEventTriggerConfig,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerAppJob.ContainerAppJobIdentity,
	ManualTriggerConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerAppJob.ContainerAppJobManualTriggerConfig,
	Registry: interface{},
	ReplicaRetryLimit: *f64,
	ScheduleTriggerConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerAppJob.ContainerAppJobScheduleTriggerConfig,
	Secret: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerAppJob.ContainerAppJobTimeouts,
	WorkloadProfileName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#location ContainerAppJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds">ReplicaTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig">EventTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | event_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#id ContainerAppJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig">ManualTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | manual_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry">Registry</a></code> | <code>interface{}</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit">ReplicaRetryLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig">ScheduleTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | schedule_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#tags ContainerAppJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName">WorkloadProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId"></a>

```go
ContainerAppEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#location ContainerAppJob#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `ReplicaTimeoutInSeconds`<sup>Required</sup> <a name="ReplicaTimeoutInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds"></a>

```go
ReplicaTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}.

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template"></a>

```go
Template ContainerAppJobTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#template ContainerAppJob#template}

---

##### `EventTriggerConfig`<sup>Optional</sup> <a name="EventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig"></a>

```go
EventTriggerConfig ContainerAppJobEventTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

event_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#event_trigger_config ContainerAppJob#event_trigger_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#id ContainerAppJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity"></a>

```go
Identity ContainerAppJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `ManualTriggerConfig`<sup>Optional</sup> <a name="ManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig"></a>

```go
ManualTriggerConfig ContainerAppJobManualTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

manual_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#manual_trigger_config ContainerAppJob#manual_trigger_config}

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry"></a>

```go
Registry interface{}
```

- *Type:* interface{}

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#registry ContainerAppJob#registry}

---

##### `ReplicaRetryLimit`<sup>Optional</sup> <a name="ReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit"></a>

```go
ReplicaRetryLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}.

---

##### `ScheduleTriggerConfig`<sup>Optional</sup> <a name="ScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig"></a>

```go
ScheduleTriggerConfig ContainerAppJobScheduleTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

schedule_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#schedule_trigger_config ContainerAppJob#schedule_trigger_config}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#secret ContainerAppJob#secret}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#tags ContainerAppJob#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts"></a>

```go
Timeouts ContainerAppJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#timeouts ContainerAppJob#timeouts}

---

##### `WorkloadProfileName`<sup>Optional</sup> <a name="WorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName"></a>

```go
WorkloadProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}.

---

### ContainerAppJobEventTriggerConfig <a name="ContainerAppJobEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobEventTriggerConfig {
	Parallelism: *f64,
	ReplicaCompletionCount: *f64,
	Scale: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism">Parallelism</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale">Scale</a></code> | <code>interface{}</code> | scale block. |

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism"></a>

```go
Parallelism *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `ReplicaCompletionCount`<sup>Optional</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount"></a>

```go
ReplicaCompletionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale"></a>

```go
Scale interface{}
```

- *Type:* interface{}

scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#scale ContainerAppJob#scale}

---

### ContainerAppJobEventTriggerConfigScale <a name="ContainerAppJobEventTriggerConfigScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobEventTriggerConfigScale {
	MaxExecutions: *f64,
	MinExecutions: *f64,
	PollingIntervalInSeconds: *f64,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions">MaxExecutions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions">MinExecutions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds">PollingIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `MaxExecutions`<sup>Optional</sup> <a name="MaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions"></a>

```go
MaxExecutions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}.

---

##### `MinExecutions`<sup>Optional</sup> <a name="MinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions"></a>

```go
MinExecutions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}.

---

##### `PollingIntervalInSeconds`<sup>Optional</sup> <a name="PollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds"></a>

```go
PollingIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#rules ContainerAppJob#rules}

---

### ContainerAppJobEventTriggerConfigScaleRules <a name="ContainerAppJobEventTriggerConfigScaleRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobEventTriggerConfigScaleRules {
	CustomRuleType: *string,
	Metadata: *map[string]*string,
	Name: *string,
	Authentication: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType">CustomRuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication">Authentication</a></code> | <code>interface{}</code> | authentication block. |

---

##### `CustomRuleType`<sup>Required</sup> <a name="CustomRuleType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType"></a>

```go
CustomRuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}.

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication"></a>

```go
Authentication interface{}
```

- *Type:* interface{}

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#authentication ContainerAppJob#authentication}

---

### ContainerAppJobEventTriggerConfigScaleRulesAuthentication <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication {
	SecretName: *string,
	TriggerParameter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter">TriggerParameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}.

---

##### `TriggerParameter`<sup>Required</sup> <a name="TriggerParameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter"></a>

```go
TriggerParameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}.

---

### ContainerAppJobIdentity <a name="ContainerAppJobIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#type ContainerAppJob#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#type ContainerAppJob#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}.

---

### ContainerAppJobManualTriggerConfig <a name="ContainerAppJobManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobManualTriggerConfig {
	Parallelism: *f64,
	ReplicaCompletionCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism">Parallelism</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism"></a>

```go
Parallelism *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `ReplicaCompletionCount`<sup>Optional</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount"></a>

```go
ReplicaCompletionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobRegistry <a name="ContainerAppJobRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobRegistry {
	Server: *string,
	Identity: *string,
	PasswordSecretName: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server">Server</a></code> | <code>*string</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity">Identity</a></code> | <code>*string</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName">PasswordSecretName</a></code> | <code>*string</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username">Username</a></code> | <code>*string</code> | The username to use for this Container Registry. |

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server"></a>

```go
Server *string
```

- *Type:* *string

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#server ContainerAppJob#server}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `PasswordSecretName`<sup>Optional</sup> <a name="PasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName"></a>

```go
PasswordSecretName *string
```

- *Type:* *string

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#password_secret_name ContainerAppJob#password_secret_name}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#username ContainerAppJob#username}

---

### ContainerAppJobScheduleTriggerConfig <a name="ContainerAppJobScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobScheduleTriggerConfig {
	CronExpression: *string,
	Parallelism: *f64,
	ReplicaCompletionCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism">Parallelism</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}.

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism"></a>

```go
Parallelism *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `ReplicaCompletionCount`<sup>Optional</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount"></a>

```go
ReplicaCompletionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobSecret <a name="ContainerAppJobSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobSecret {
	Name: *string,
	Identity: *string,
	KeyVaultSecretId: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name">Name</a></code> | <code>*string</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity">Identity</a></code> | <code>*string</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>*string</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value">Value</a></code> | <code>*string</code> | The value for this secret. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name"></a>

```go
Name *string
```

- *Type:* *string

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `KeyVaultSecretId`<sup>Optional</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId"></a>

```go
KeyVaultSecretId *string
```

- *Type:* *string

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#key_vault_secret_id ContainerAppJob#key_vault_secret_id}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplate <a name="ContainerAppJobTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplate {
	Container: interface{},
	InitContainer: interface{},
	Volume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container">Container</a></code> | <code>interface{}</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer">InitContainer</a></code> | <code>interface{}</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume">Volume</a></code> | <code>interface{}</code> | volume block. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container"></a>

```go
Container interface{}
```

- *Type:* interface{}

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#container ContainerAppJob#container}

---

##### `InitContainer`<sup>Optional</sup> <a name="InitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer"></a>

```go
InitContainer interface{}
```

- *Type:* interface{}

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#init_container ContainerAppJob#init_container}

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume"></a>

```go
Volume interface{}
```

- *Type:* interface{}

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#volume ContainerAppJob#volume}

---

### ContainerAppJobTemplateContainer <a name="ContainerAppJobTemplateContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainer {
	Cpu: *f64,
	Image: *string,
	Memory: *string,
	Name: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: interface{},
	LivenessProbe: interface{},
	ReadinessProbe: interface{},
	StartupProbe: interface{},
	VolumeMounts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu">Cpu</a></code> | <code>*f64</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image">Image</a></code> | <code>*string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory">Memory</a></code> | <code>*string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name">Name</a></code> | <code>*string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args">Args</a></code> | <code>*[]*string</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command">Command</a></code> | <code>*[]*string</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe">LivenessProbe</a></code> | <code>interface{}</code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe">ReadinessProbe</a></code> | <code>interface{}</code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe">StartupProbe</a></code> | <code>interface{}</code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

The amount of vCPU to allocate to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

The amount of memory to allocate to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe"></a>

```go
LivenessProbe interface{}
```

- *Type:* interface{}

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#liveness_probe ContainerAppJob#liveness_probe}

---

##### `ReadinessProbe`<sup>Optional</sup> <a name="ReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe"></a>

```go
ReadinessProbe interface{}
```

- *Type:* interface{}

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#readiness_probe ContainerAppJob#readiness_probe}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe"></a>

```go
StartupProbe interface{}
```

- *Type:* interface{}

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#startup_probe ContainerAppJob#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateContainerEnv <a name="ContainerAppJobTemplateContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerEnv {
	Name: *string,
	SecretName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name">Name</a></code> | <code>*string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName">SecretName</a></code> | <code>*string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value">Value</a></code> | <code>*string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerLivenessProbe <a name="ContainerAppJobTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerLivenessProbe {
	Port: *f64,
	Transport: *string,
	FailureCountThreshold: *f64,
	Header: interface{},
	Host: *string,
	InitialDelay: *f64,
	IntervalSeconds: *f64,
	Path: *string,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port">Port</a></code> | <code>*f64</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport">Transport</a></code> | <code>*string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>*f64</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host">Host</a></code> | <code>*string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay">InitialDelay</a></code> | <code>*f64</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path">Path</a></code> | <code>*string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout">Timeout</a></code> | <code>*f64</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport"></a>

```go
Transport *string
```

- *Type:* *string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `FailureCountThreshold`<sup>Optional</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```go
FailureCountThreshold *f64
```

- *Type:* *f64

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host"></a>

```go
Host *string
```

- *Type:* *string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay"></a>

```go
InitialDelay *f64
```

- *Type:* *f64

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `1` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path"></a>

```go
Path *string
```

- *Type:* *string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerLivenessProbeHeader <a name="ContainerAppJobTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerLivenessProbeHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name">Name</a></code> | <code>*string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value">Value</a></code> | <code>*string</code> | The HTTP Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerReadinessProbe <a name="ContainerAppJobTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerReadinessProbe {
	Port: *f64,
	Transport: *string,
	FailureCountThreshold: *f64,
	Header: interface{},
	Host: *string,
	InitialDelay: *f64,
	IntervalSeconds: *f64,
	Path: *string,
	SuccessCountThreshold: *f64,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port">Port</a></code> | <code>*f64</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport">Transport</a></code> | <code>*string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>*f64</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host">Host</a></code> | <code>*string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.initialDelay">InitialDelay</a></code> | <code>*f64</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path">Path</a></code> | <code>*string</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold">SuccessCountThreshold</a></code> | <code>*f64</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout">Timeout</a></code> | <code>*f64</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport"></a>

```go
Transport *string
```

- *Type:* *string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `FailureCountThreshold`<sup>Optional</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```go
FailureCountThreshold *f64
```

- *Type:* *f64

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host"></a>

```go
Host *string
```

- *Type:* *string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.initialDelay"></a>

```go
InitialDelay *f64
```

- *Type:* *f64

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `0` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path"></a>

```go
Path *string
```

- *Type:* *string

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `SuccessCountThreshold`<sup>Optional</sup> <a name="SuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```go
SuccessCountThreshold *f64
```

- *Type:* *f64

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#success_count_threshold ContainerAppJob#success_count_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerReadinessProbeHeader <a name="ContainerAppJobTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerReadinessProbeHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name">Name</a></code> | <code>*string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value">Value</a></code> | <code>*string</code> | The HTTP Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerStartupProbe <a name="ContainerAppJobTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerStartupProbe {
	Port: *f64,
	Transport: *string,
	FailureCountThreshold: *f64,
	Header: interface{},
	Host: *string,
	InitialDelay: *f64,
	IntervalSeconds: *f64,
	Path: *string,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port">Port</a></code> | <code>*f64</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport">Transport</a></code> | <code>*string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>*f64</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host">Host</a></code> | <code>*string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.initialDelay">InitialDelay</a></code> | <code>*f64</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path">Path</a></code> | <code>*string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout">Timeout</a></code> | <code>*f64</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport"></a>

```go
Transport *string
```

- *Type:* *string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `FailureCountThreshold`<sup>Optional</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```go
FailureCountThreshold *f64
```

- *Type:* *f64

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host"></a>

```go
Host *string
```

- *Type:* *string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.initialDelay"></a>

```go
InitialDelay *f64
```

- *Type:* *f64

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `0` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path"></a>

```go
Path *string
```

- *Type:* *string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerStartupProbeHeader <a name="ContainerAppJobTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerStartupProbeHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name">Name</a></code> | <code>*string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value">Value</a></code> | <code>*string</code> | The HTTP Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerVolumeMounts <a name="ContainerAppJobTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateContainerVolumeMounts {
	Name: *string,
	Path: *string,
	SubPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name">Name</a></code> | <code>*string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path">Path</a></code> | <code>*string</code> | The path in the container at which to mount this volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.subPath">SubPath</a></code> | <code>*string</code> | The sub path of the volume to be mounted in the container. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.subPath"></a>

```go
SubPath *string
```

- *Type:* *string

The sub path of the volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#sub_path ContainerAppJob#sub_path}

---

### ContainerAppJobTemplateInitContainer <a name="ContainerAppJobTemplateInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateInitContainer {
	Image: *string,
	Name: *string,
	Args: *[]*string,
	Command: *[]*string,
	Cpu: *f64,
	Env: interface{},
	Memory: *string,
	VolumeMounts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image">Image</a></code> | <code>*string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name">Name</a></code> | <code>*string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args">Args</a></code> | <code>*[]*string</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command">Command</a></code> | <code>*[]*string</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu">Cpu</a></code> | <code>*f64</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory">Memory</a></code> | <code>*string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

The amount of vCPU to allocate to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

The amount of memory to allocate to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateInitContainerEnv <a name="ContainerAppJobTemplateInitContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateInitContainerEnv {
	Name: *string,
	SecretName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name">Name</a></code> | <code>*string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName">SecretName</a></code> | <code>*string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value">Value</a></code> | <code>*string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateInitContainerVolumeMounts <a name="ContainerAppJobTemplateInitContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateInitContainerVolumeMounts {
	Name: *string,
	Path: *string,
	SubPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name">Name</a></code> | <code>*string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path">Path</a></code> | <code>*string</code> | The path in the container at which to mount this volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.subPath">SubPath</a></code> | <code>*string</code> | The sub path of the volume to be mounted in the container. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.subPath"></a>

```go
SubPath *string
```

- *Type:* *string

The sub path of the volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#sub_path ContainerAppJob#sub_path}

---

### ContainerAppJobTemplateVolume <a name="ContainerAppJobTemplateVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTemplateVolume {
	Name: *string,
	MountOptions: *string,
	StorageName: *string,
	StorageType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name">Name</a></code> | <code>*string</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.mountOptions">MountOptions</a></code> | <code>*string</code> | Mount options used while mounting the AzureFile. Must be a comma-separated string. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName">StorageName</a></code> | <code>*string</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType">StorageType</a></code> | <code>*string</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.mountOptions"></a>

```go
MountOptions *string
```

- *Type:* *string

Mount options used while mounting the AzureFile. Must be a comma-separated string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#mount_options ContainerAppJob#mount_options}

---

##### `StorageName`<sup>Optional</sup> <a name="StorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName"></a>

```go
StorageName *string
```

- *Type:* *string

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#storage_name ContainerAppJob#storage_name}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#storage_type ContainerAppJob#storage_type}

---

### ContainerAppJobTimeouts <a name="ContainerAppJobTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

&containerappjob.ContainerAppJobTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#create ContainerAppJob#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#delete ContainerAppJob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#read ContainerAppJob#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#update ContainerAppJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#create ContainerAppJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#delete ContainerAppJob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#read ContainerAppJob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_app_job#update ContainerAppJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppJobEventTriggerConfigOutputReference <a name="ContainerAppJobEventTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppJobEventTriggerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale">PutScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount">ResetReplicaCompletionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale">ResetScale</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScale` <a name="PutScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale"></a>

```go
func PutScale(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism"></a>

```go
func ResetParallelism()
```

##### `ResetReplicaCompletionCount` <a name="ResetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```go
func ResetReplicaCompletionCount()
```

##### `ResetScale` <a name="ResetScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale"></a>

```go
func ResetScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale">Scale</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput">ReplicaCompletionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput">ScaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale"></a>

```go
func Scale() ContainerAppJobEventTriggerConfigScaleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a>

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput"></a>

```go
func ParallelismInput() *f64
```

- *Type:* *f64

---

##### `ReplicaCompletionCountInput`<sup>Optional</sup> <a name="ReplicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```go
func ReplicaCompletionCountInput() *f64
```

- *Type:* *f64

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput"></a>

```go
func ScaleInput() interface{}
```

- *Type:* interface{}

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `ReplicaCompletionCount`<sup>Required</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```go
func ReplicaCompletionCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAppJobEventTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---


### ContainerAppJobEventTriggerConfigScaleList <a name="ContainerAppJobEventTriggerConfigScaleList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigScaleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobEventTriggerConfigScaleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get"></a>

```go
func Get(index *f64) ContainerAppJobEventTriggerConfigScaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobEventTriggerConfigScaleOutputReference <a name="ContainerAppJobEventTriggerConfigScaleOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigScaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobEventTriggerConfigScaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions">ResetMaxExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions">ResetMinExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds">ResetPollingIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaxExecutions` <a name="ResetMaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions"></a>

```go
func ResetMaxExecutions()
```

##### `ResetMinExecutions` <a name="ResetMinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions"></a>

```go
func ResetMinExecutions()
```

##### `ResetPollingIntervalInSeconds` <a name="ResetPollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds"></a>

```go
func ResetPollingIntervalInSeconds()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput">MaxExecutionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput">MinExecutionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput">PollingIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions">MaxExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions">MinExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds">PollingIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules"></a>

```go
func Rules() ContainerAppJobEventTriggerConfigScaleRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a>

---

##### `MaxExecutionsInput`<sup>Optional</sup> <a name="MaxExecutionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput"></a>

```go
func MaxExecutionsInput() *f64
```

- *Type:* *f64

---

##### `MinExecutionsInput`<sup>Optional</sup> <a name="MinExecutionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput"></a>

```go
func MinExecutionsInput() *f64
```

- *Type:* *f64

---

##### `PollingIntervalInSecondsInput`<sup>Optional</sup> <a name="PollingIntervalInSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput"></a>

```go
func PollingIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxExecutions`<sup>Required</sup> <a name="MaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions"></a>

```go
func MaxExecutions() *f64
```

- *Type:* *f64

---

##### `MinExecutions`<sup>Required</sup> <a name="MinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions"></a>

```go
func MinExecutions() *f64
```

- *Type:* *f64

---

##### `PollingIntervalInSeconds`<sup>Required</sup> <a name="PollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds"></a>

```go
func PollingIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigScaleRulesAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get"></a>

```go
func Get(index *f64) ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput">TriggerParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter">TriggerParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `TriggerParameterInput`<sup>Optional</sup> <a name="TriggerParameterInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput"></a>

```go
func TriggerParameterInput() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `TriggerParameter`<sup>Required</sup> <a name="TriggerParameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter"></a>

```go
func TriggerParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobEventTriggerConfigScaleRulesList <a name="ContainerAppJobEventTriggerConfigScaleRulesList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigScaleRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobEventTriggerConfigScaleRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get"></a>

```go
func Get(index *f64) ContainerAppJobEventTriggerConfigScaleRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobEventTriggerConfigScaleRulesOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobEventTriggerConfigScaleRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobEventTriggerConfigScaleRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication"></a>

```go
func PutAuthentication(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication"></a>

```go
func ResetAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput">CustomRuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType">CustomRuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication"></a>

```go
func Authentication() ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput"></a>

```go
func AuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `CustomRuleTypeInput`<sup>Optional</sup> <a name="CustomRuleTypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput"></a>

```go
func CustomRuleTypeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CustomRuleType`<sup>Required</sup> <a name="CustomRuleType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType"></a>

```go
func CustomRuleType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobIdentityOutputReference <a name="ContainerAppJobIdentityOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppJobIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAppJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---


### ContainerAppJobManualTriggerConfigOutputReference <a name="ContainerAppJobManualTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobManualTriggerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppJobManualTriggerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount">ResetReplicaCompletionCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism"></a>

```go
func ResetParallelism()
```

##### `ResetReplicaCompletionCount` <a name="ResetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```go
func ResetReplicaCompletionCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput">ReplicaCompletionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput"></a>

```go
func ParallelismInput() *f64
```

- *Type:* *f64

---

##### `ReplicaCompletionCountInput`<sup>Optional</sup> <a name="ReplicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```go
func ReplicaCompletionCountInput() *f64
```

- *Type:* *f64

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `ReplicaCompletionCount`<sup>Required</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```go
func ReplicaCompletionCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAppJobManualTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---


### ContainerAppJobRegistryList <a name="ContainerAppJobRegistryList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobRegistryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobRegistryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get"></a>

```go
func Get(index *f64) ContainerAppJobRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobRegistryOutputReference <a name="ContainerAppJobRegistryOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobRegistryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobRegistryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName">ResetPasswordSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPasswordSecretName` <a name="ResetPasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName"></a>

```go
func ResetPasswordSecretName()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput">PasswordSecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName">PasswordSecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `PasswordSecretNameInput`<sup>Optional</sup> <a name="PasswordSecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput"></a>

```go
func PasswordSecretNameInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `PasswordSecretName`<sup>Required</sup> <a name="PasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName"></a>

```go
func PasswordSecretName() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobScheduleTriggerConfigOutputReference <a name="ContainerAppJobScheduleTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobScheduleTriggerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppJobScheduleTriggerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount">ResetReplicaCompletionCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism"></a>

```go
func ResetParallelism()
```

##### `ResetReplicaCompletionCount` <a name="ResetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```go
func ResetReplicaCompletionCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput">ReplicaCompletionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput"></a>

```go
func ParallelismInput() *f64
```

- *Type:* *f64

---

##### `ReplicaCompletionCountInput`<sup>Optional</sup> <a name="ReplicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```go
func ReplicaCompletionCountInput() *f64
```

- *Type:* *f64

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `ReplicaCompletionCount`<sup>Required</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```go
func ReplicaCompletionCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAppJobScheduleTriggerConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---


### ContainerAppJobSecretList <a name="ContainerAppJobSecretList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get"></a>

```go
func Get(index *f64) ContainerAppJobSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobSecretOutputReference <a name="ContainerAppJobSecretOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId">ResetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetKeyVaultSecretId` <a name="ResetKeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId"></a>

```go
func ResetKeyVaultSecretId()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput">KeyVaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `KeyVaultSecretIdInput`<sup>Optional</sup> <a name="KeyVaultSecretIdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput"></a>

```go
func KeyVaultSecretIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId"></a>

```go
func KeyVaultSecretId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerEnvList <a name="ContainerAppJobTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerEnvOutputReference <a name="ContainerAppJobTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerList <a name="ContainerAppJobTemplateContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderList <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerLivenessProbeHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerLivenessProbeHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerLivenessProbeList <a name="ContainerAppJobTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerLivenessProbeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerLivenessProbeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerLivenessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerLivenessProbeOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerLivenessProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerLivenessProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold">ResetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFailureCountThreshold` <a name="ResetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```go
func ResetFailureCountThreshold()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```go
func ResetInitialDelay()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">TerminationGracePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">FailureCountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput">TransportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay">InitialDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport">Transport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header"></a>

```go
func Header() ContainerAppJobTemplateContainerLivenessProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a>

---

##### `TerminationGracePeriodSeconds`<sup>Required</sup> <a name="TerminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```go
func TerminationGracePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `FailureCountThresholdInput`<sup>Optional</sup> <a name="FailureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```go
func FailureCountThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```go
func InitialDelayInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```go
func TransportInput() *string
```

- *Type:* *string

---

##### `FailureCountThreshold`<sup>Required</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```go
func FailureCountThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```go
func InitialDelay() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```go
func Transport() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerOutputReference <a name="ContainerAppJobTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe">PutReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe">ResetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe"></a>

```go
func PutLivenessProbe(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReadinessProbe` <a name="PutReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe"></a>

```go
func PutReadinessProbe(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe"></a>

```go
func PutStartupProbe(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe"></a>

```go
func ResetLivenessProbe()
```

##### `ResetReadinessProbe` <a name="ResetReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe"></a>

```go
func ResetReadinessProbe()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe"></a>

```go
func ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe">ReadinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput">ReadinessProbeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env"></a>

```go
func Env() ContainerAppJobTemplateContainerEnvList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage"></a>

```go
func EphemeralStorage() *string
```

- *Type:* *string

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe"></a>

```go
func LivenessProbe() ContainerAppJobTemplateContainerLivenessProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a>

---

##### `ReadinessProbe`<sup>Required</sup> <a name="ReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe"></a>

```go
func ReadinessProbe() ContainerAppJobTemplateContainerReadinessProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe"></a>

```go
func StartupProbe() ContainerAppJobTemplateContainerStartupProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() ContainerAppJobTemplateContainerVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput"></a>

```go
func LivenessProbeInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReadinessProbeInput`<sup>Optional</sup> <a name="ReadinessProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput"></a>

```go
func ReadinessProbeInput() interface{}
```

- *Type:* interface{}

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput"></a>

```go
func StartupProbeInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderList <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerReadinessProbeHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerReadinessProbeHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerReadinessProbeList <a name="ContainerAppJobTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerReadinessProbeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerReadinessProbeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerReadinessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerReadinessProbeOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerReadinessProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerReadinessProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold">ResetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold">ResetSuccessCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFailureCountThreshold` <a name="ResetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```go
func ResetFailureCountThreshold()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetInitialDelay"></a>

```go
func ResetInitialDelay()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSuccessCountThreshold` <a name="ResetSuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```go
func ResetSuccessCountThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">FailureCountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">SuccessCountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput">TransportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelay">InitialDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">SuccessCountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport">Transport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header"></a>

```go
func Header() ContainerAppJobTemplateContainerReadinessProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a>

---

##### `FailureCountThresholdInput`<sup>Optional</sup> <a name="FailureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```go
func FailureCountThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelayInput"></a>

```go
func InitialDelayInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SuccessCountThresholdInput`<sup>Optional</sup> <a name="SuccessCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```go
func SuccessCountThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```go
func TransportInput() *string
```

- *Type:* *string

---

##### `FailureCountThreshold`<sup>Required</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```go
func FailureCountThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelay"></a>

```go
func InitialDelay() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SuccessCountThreshold`<sup>Required</sup> <a name="SuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```go
func SuccessCountThreshold() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```go
func Transport() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerStartupProbeHeaderList <a name="ContainerAppJobTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerStartupProbeHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerStartupProbeHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerStartupProbeHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerStartupProbeList <a name="ContainerAppJobTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerStartupProbeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerStartupProbeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerStartupProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerStartupProbeOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerStartupProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerStartupProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold">ResetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFailureCountThreshold` <a name="ResetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```go
func ResetFailureCountThreshold()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetInitialDelay"></a>

```go
func ResetInitialDelay()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">TerminationGracePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">FailureCountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput">TransportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelay">InitialDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport">Transport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header"></a>

```go
func Header() ContainerAppJobTemplateContainerStartupProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a>

---

##### `TerminationGracePeriodSeconds`<sup>Required</sup> <a name="TerminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```go
func TerminationGracePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `FailureCountThresholdInput`<sup>Optional</sup> <a name="FailureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```go
func FailureCountThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelayInput"></a>

```go
func InitialDelayInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```go
func TransportInput() *string
```

- *Type:* *string

---

##### `FailureCountThreshold`<sup>Required</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```go
func FailureCountThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelay"></a>

```go
func InitialDelay() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport"></a>

```go
func Transport() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerVolumeMountsList <a name="ContainerAppJobTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateContainerVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateContainerVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateContainerVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resetSubPath">ResetSubPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubPath` <a name="ResetSubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resetSubPath"></a>

```go
func ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPathInput"></a>

```go
func SubPathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPath"></a>

```go
func SubPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateInitContainerEnvList <a name="ContainerAppJobTemplateInitContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateInitContainerEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateInitContainerEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateInitContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateInitContainerEnvOutputReference <a name="ContainerAppJobTemplateInitContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateInitContainerEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateInitContainerEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateInitContainerList <a name="ContainerAppJobTemplateInitContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateInitContainerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateInitContainerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateInitContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateInitContainerOutputReference <a name="ContainerAppJobTemplateInitContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateInitContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateInitContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env"></a>

```go
func Env() ContainerAppJobTemplateInitContainerEnvList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage"></a>

```go
func EphemeralStorage() *string
```

- *Type:* *string

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() ContainerAppJobTemplateInitContainerVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateInitContainerVolumeMountsList <a name="ContainerAppJobTemplateInitContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateInitContainerVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateInitContainerVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateInitContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateInitContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateInitContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateInitContainerVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateInitContainerVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resetSubPath">ResetSubPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubPath` <a name="ResetSubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resetSubPath"></a>

```go
func ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPathInput"></a>

```go
func SubPathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPath"></a>

```go
func SubPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateOutputReference <a name="ContainerAppJobTemplateOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppJobTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer">PutInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer">ResetInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer"></a>

```go
func PutContainer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInitContainer` <a name="PutInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer"></a>

```go
func PutInitContainer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume"></a>

```go
func PutVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInitContainer` <a name="ResetInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer"></a>

```go
func ResetInitContainer()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume"></a>

```go
func ResetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer">InitContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput">ContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput">InitContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput">VolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container"></a>

```go
func Container() ContainerAppJobTemplateContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a>

---

##### `InitContainer`<sup>Required</sup> <a name="InitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer"></a>

```go
func InitContainer() ContainerAppJobTemplateInitContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume"></a>

```go
func Volume() ContainerAppJobTemplateVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput"></a>

```go
func ContainerInput() interface{}
```

- *Type:* interface{}

---

##### `InitContainerInput`<sup>Optional</sup> <a name="InitContainerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput"></a>

```go
func InitContainerInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput"></a>

```go
func VolumeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAppJobTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---


### ContainerAppJobTemplateVolumeList <a name="ContainerAppJobTemplateVolumeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppJobTemplateVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get"></a>

```go
func Get(index *f64) ContainerAppJobTemplateVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTemplateVolumeOutputReference <a name="ContainerAppJobTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTemplateVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppJobTemplateVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName">ResetStorageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetStorageName` <a name="ResetStorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName"></a>

```go
func ResetStorageName()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType"></a>

```go
func ResetStorageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput">StorageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptions">MountOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName">StorageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StorageNameInput`<sup>Optional</sup> <a name="StorageNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput"></a>

```go
func StorageNameInput() *string
```

- *Type:* *string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptions"></a>

```go
func MountOptions() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageName`<sup>Required</sup> <a name="StorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName"></a>

```go
func StorageName() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppJobTimeoutsOutputReference <a name="ContainerAppJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerappjob"

containerappjob.NewContainerAppJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



