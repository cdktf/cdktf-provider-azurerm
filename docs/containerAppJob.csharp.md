# `containerAppJob` Submodule <a name="`containerAppJob` Submodule" id="@cdktf/provider-azurerm.containerAppJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppJob <a name="ContainerAppJob" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job azurerm_container_app_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJob(Construct Scope, string Id, ContainerAppJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig">ContainerAppJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTriggerConfig` <a name="PutEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig"></a>

```csharp
private void PutEventTriggerConfig(ContainerAppJobEventTriggerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putEventTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity"></a>

```csharp
private void PutIdentity(ContainerAppJobIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `PutManualTriggerConfig` <a name="PutManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig"></a>

```csharp
private void PutManualTriggerConfig(ContainerAppJobManualTriggerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putManualTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `PutRegistry` <a name="PutRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry"></a>

```csharp
private void PutRegistry(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putRegistry.parameter.value"></a>

- *Type:* object

---

##### `PutScheduleTriggerConfig` <a name="PutScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig"></a>

```csharp
private void PutScheduleTriggerConfig(ContainerAppJobScheduleTriggerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putScheduleTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate"></a>

```csharp
private void PutTemplate(ContainerAppJobTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAppJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

---

##### `ResetEventTriggerConfig` <a name="ResetEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetEventTriggerConfig"></a>

```csharp
private void ResetEventTriggerConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetManualTriggerConfig` <a name="ResetManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetManualTriggerConfig"></a>

```csharp
private void ResetManualTriggerConfig()
```

##### `ResetRegistry` <a name="ResetRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetRegistry"></a>

```csharp
private void ResetRegistry()
```

##### `ResetReplicaRetryLimit` <a name="ResetReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetReplicaRetryLimit"></a>

```csharp
private void ResetReplicaRetryLimit()
```

##### `ResetScheduleTriggerConfig` <a name="ResetScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetScheduleTriggerConfig"></a>

```csharp
private void ResetScheduleTriggerConfig()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkloadProfileName` <a name="ResetWorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.resetWorkloadProfileName"></a>

```csharp
private void ResetWorkloadProfileName()
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

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAppJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAppJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAppJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint">EventStreamEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig">EventTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig">ManualTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry">Registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig">ScheduleTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template">Template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput">EventTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput">ManualTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput">RegistryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput">ReplicaRetryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput">ReplicaTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput">ScheduleTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput">WorkloadProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit">ReplicaRetryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds">ReplicaTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName">WorkloadProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EventStreamEndpoint`<sup>Required</sup> <a name="EventStreamEndpoint" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventStreamEndpoint"></a>

```csharp
public string EventStreamEndpoint { get; }
```

- *Type:* string

---

##### `EventTriggerConfig`<sup>Required</sup> <a name="EventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfig"></a>

```csharp
public ContainerAppJobEventTriggerConfigOutputReference EventTriggerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference">ContainerAppJobEventTriggerConfigOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identity"></a>

```csharp
public ContainerAppJobIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference">ContainerAppJobIdentityOutputReference</a>

---

##### `ManualTriggerConfig`<sup>Required</sup> <a name="ManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfig"></a>

```csharp
public ContainerAppJobManualTriggerConfigOutputReference ManualTriggerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference">ContainerAppJobManualTriggerConfigOutputReference</a>

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.outboundIpAddresses"></a>

```csharp
public string[] OutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registry"></a>

```csharp
public ContainerAppJobRegistryList Registry { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList">ContainerAppJobRegistryList</a>

---

##### `ScheduleTriggerConfig`<sup>Required</sup> <a name="ScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfig"></a>

```csharp
public ContainerAppJobScheduleTriggerConfigOutputReference ScheduleTriggerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference">ContainerAppJobScheduleTriggerConfigOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secret"></a>

```csharp
public ContainerAppJobSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList">ContainerAppJobSecretList</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.template"></a>

```csharp
public ContainerAppJobTemplateOutputReference Template { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference">ContainerAppJobTemplateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeouts"></a>

```csharp
public ContainerAppJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference">ContainerAppJobTimeoutsOutputReference</a>

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentIdInput"></a>

```csharp
public string ContainerAppEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `EventTriggerConfigInput`<sup>Optional</sup> <a name="EventTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.eventTriggerConfigInput"></a>

```csharp
public ContainerAppJobEventTriggerConfig EventTriggerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.identityInput"></a>

```csharp
public ContainerAppJobIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManualTriggerConfigInput`<sup>Optional</sup> <a name="ManualTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.manualTriggerConfigInput"></a>

```csharp
public ContainerAppJobManualTriggerConfig ManualTriggerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.registryInput"></a>

```csharp
public object RegistryInput { get; }
```

- *Type:* object

---

##### `ReplicaRetryLimitInput`<sup>Optional</sup> <a name="ReplicaRetryLimitInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimitInput"></a>

```csharp
public double ReplicaRetryLimitInput { get; }
```

- *Type:* double

---

##### `ReplicaTimeoutInSecondsInput`<sup>Optional</sup> <a name="ReplicaTimeoutInSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSecondsInput"></a>

```csharp
public double ReplicaTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScheduleTriggerConfigInput`<sup>Optional</sup> <a name="ScheduleTriggerConfigInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.scheduleTriggerConfigInput"></a>

```csharp
public ContainerAppJobScheduleTriggerConfig ScheduleTriggerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.templateInput"></a>

```csharp
public ContainerAppJobTemplate TemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadProfileNameInput`<sup>Optional</sup> <a name="WorkloadProfileNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileNameInput"></a>

```csharp
public string WorkloadProfileNameInput { get; }
```

- *Type:* string

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicaRetryLimit`<sup>Required</sup> <a name="ReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaRetryLimit"></a>

```csharp
public double ReplicaRetryLimit { get; }
```

- *Type:* double

---

##### `ReplicaTimeoutInSeconds`<sup>Required</sup> <a name="ReplicaTimeoutInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.replicaTimeoutInSeconds"></a>

```csharp
public double ReplicaTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkloadProfileName`<sup>Required</sup> <a name="WorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.workloadProfileName"></a>

```csharp
public string WorkloadProfileName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppJobConfig <a name="ContainerAppJobConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerAppEnvironmentId,
    string Location,
    string Name,
    double ReplicaTimeoutInSeconds,
    string ResourceGroupName,
    ContainerAppJobTemplate Template,
    ContainerAppJobEventTriggerConfig EventTriggerConfig = null,
    string Id = null,
    ContainerAppJobIdentity Identity = null,
    ContainerAppJobManualTriggerConfig ManualTriggerConfig = null,
    object Registry = null,
    double ReplicaRetryLimit = null,
    ContainerAppJobScheduleTriggerConfig ScheduleTriggerConfig = null,
    object Secret = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ContainerAppJobTimeouts Timeouts = null,
    string WorkloadProfileName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#location ContainerAppJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds">ReplicaTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig">EventTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | event_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#id ContainerAppJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig">ManualTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | manual_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry">Registry</a></code> | <code>object</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit">ReplicaRetryLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig">ScheduleTriggerConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | schedule_trigger_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#tags ContainerAppJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName">WorkloadProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#location ContainerAppJob#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `ReplicaTimeoutInSeconds`<sup>Required</sup> <a name="ReplicaTimeoutInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaTimeoutInSeconds"></a>

```csharp
public double ReplicaTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}.

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.template"></a>

```csharp
public ContainerAppJobTemplate Template { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#template ContainerAppJob#template}

---

##### `EventTriggerConfig`<sup>Optional</sup> <a name="EventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.eventTriggerConfig"></a>

```csharp
public ContainerAppJobEventTriggerConfig EventTriggerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

event_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#event_trigger_config ContainerAppJob#event_trigger_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#id ContainerAppJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.identity"></a>

```csharp
public ContainerAppJobIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `ManualTriggerConfig`<sup>Optional</sup> <a name="ManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.manualTriggerConfig"></a>

```csharp
public ContainerAppJobManualTriggerConfig ManualTriggerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

manual_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#manual_trigger_config ContainerAppJob#manual_trigger_config}

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.registry"></a>

```csharp
public object Registry { get; set; }
```

- *Type:* object

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#registry ContainerAppJob#registry}

---

##### `ReplicaRetryLimit`<sup>Optional</sup> <a name="ReplicaRetryLimit" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.replicaRetryLimit"></a>

```csharp
public double ReplicaRetryLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}.

---

##### `ScheduleTriggerConfig`<sup>Optional</sup> <a name="ScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.scheduleTriggerConfig"></a>

```csharp
public ContainerAppJobScheduleTriggerConfig ScheduleTriggerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

schedule_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#schedule_trigger_config ContainerAppJob#schedule_trigger_config}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#secret ContainerAppJob#secret}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#tags ContainerAppJob#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.timeouts"></a>

```csharp
public ContainerAppJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts">ContainerAppJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#timeouts ContainerAppJob#timeouts}

---

##### `WorkloadProfileName`<sup>Optional</sup> <a name="WorkloadProfileName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobConfig.property.workloadProfileName"></a>

```csharp
public string WorkloadProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}.

---

### ContainerAppJobEventTriggerConfig <a name="ContainerAppJobEventTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfig {
    double Parallelism = null,
    double ReplicaCompletionCount = null,
    object Scale = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism">Parallelism</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale">Scale</a></code> | <code>object</code> | scale block. |

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `ReplicaCompletionCount`<sup>Optional</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.replicaCompletionCount"></a>

```csharp
public double ReplicaCompletionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig.property.scale"></a>

```csharp
public object Scale { get; set; }
```

- *Type:* object

scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#scale ContainerAppJob#scale}

---

### ContainerAppJobEventTriggerConfigScale <a name="ContainerAppJobEventTriggerConfigScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScale {
    double MaxExecutions = null,
    double MinExecutions = null,
    double PollingIntervalInSeconds = null,
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions">MaxExecutions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions">MinExecutions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds">PollingIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `MaxExecutions`<sup>Optional</sup> <a name="MaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.maxExecutions"></a>

```csharp
public double MaxExecutions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}.

---

##### `MinExecutions`<sup>Optional</sup> <a name="MinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.minExecutions"></a>

```csharp
public double MinExecutions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}.

---

##### `PollingIntervalInSeconds`<sup>Optional</sup> <a name="PollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.pollingIntervalInSeconds"></a>

```csharp
public double PollingIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScale.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#rules ContainerAppJob#rules}

---

### ContainerAppJobEventTriggerConfigScaleRules <a name="ContainerAppJobEventTriggerConfigScaleRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleRules {
    string CustomRuleType,
    System.Collections.Generic.IDictionary<string, string> Metadata,
    string Name,
    object Authentication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType">CustomRuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication">Authentication</a></code> | <code>object</code> | authentication block. |

---

##### `CustomRuleType`<sup>Required</sup> <a name="CustomRuleType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.customRuleType"></a>

```csharp
public string CustomRuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}.

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRules.property.authentication"></a>

```csharp
public object Authentication { get; set; }
```

- *Type:* object

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#authentication ContainerAppJob#authentication}

---

### ContainerAppJobEventTriggerConfigScaleRulesAuthentication <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleRulesAuthentication {
    string SecretName,
    string TriggerParameter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter">TriggerParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}.

---

##### `TriggerParameter`<sup>Required</sup> <a name="TriggerParameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthentication.property.triggerParameter"></a>

```csharp
public string TriggerParameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}.

---

### ContainerAppJobIdentity <a name="ContainerAppJobIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#type ContainerAppJob#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#type ContainerAppJob#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}.

---

### ContainerAppJobManualTriggerConfig <a name="ContainerAppJobManualTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobManualTriggerConfig {
    double Parallelism = null,
    double ReplicaCompletionCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism">Parallelism</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `ReplicaCompletionCount`<sup>Optional</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig.property.replicaCompletionCount"></a>

```csharp
public double ReplicaCompletionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobRegistry <a name="ContainerAppJobRegistry" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobRegistry {
    string Server,
    string Identity = null,
    string PasswordSecretName = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server">Server</a></code> | <code>string</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity">Identity</a></code> | <code>string</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName">PasswordSecretName</a></code> | <code>string</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username">Username</a></code> | <code>string</code> | The username to use for this Container Registry. |

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#server ContainerAppJob#server}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.identity"></a>

```csharp
public string Identity { get; set; }
```

- *Type:* string

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `PasswordSecretName`<sup>Optional</sup> <a name="PasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.passwordSecretName"></a>

```csharp
public string PasswordSecretName { get; set; }
```

- *Type:* string

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#password_secret_name ContainerAppJob#password_secret_name}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistry.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#username ContainerAppJob#username}

---

### ContainerAppJobScheduleTriggerConfig <a name="ContainerAppJobScheduleTriggerConfig" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobScheduleTriggerConfig {
    string CronExpression,
    double Parallelism = null,
    double ReplicaCompletionCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism">Parallelism</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}.

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}.

---

##### `ReplicaCompletionCount`<sup>Optional</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig.property.replicaCompletionCount"></a>

```csharp
public double ReplicaCompletionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}.

---

### ContainerAppJobSecret <a name="ContainerAppJobSecret" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobSecret {
    string Name,
    string Identity = null,
    string KeyVaultSecretId = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name">Name</a></code> | <code>string</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity">Identity</a></code> | <code>string</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>string</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value">Value</a></code> | <code>string</code> | The value for this secret. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.identity"></a>

```csharp
public string Identity { get; set; }
```

- *Type:* string

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#identity ContainerAppJob#identity}

---

##### `KeyVaultSecretId`<sup>Optional</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.keyVaultSecretId"></a>

```csharp
public string KeyVaultSecretId { get; set; }
```

- *Type:* string

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#key_vault_secret_id ContainerAppJob#key_vault_secret_id}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecret.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplate <a name="ContainerAppJobTemplate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplate {
    object Container,
    object InitContainer = null,
    object Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container">Container</a></code> | <code>object</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer">InitContainer</a></code> | <code>object</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume">Volume</a></code> | <code>object</code> | volume block. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.container"></a>

```csharp
public object Container { get; set; }
```

- *Type:* object

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#container ContainerAppJob#container}

---

##### `InitContainer`<sup>Optional</sup> <a name="InitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.initContainer"></a>

```csharp
public object InitContainer { get; set; }
```

- *Type:* object

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#init_container ContainerAppJob#init_container}

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate.property.volume"></a>

```csharp
public object Volume { get; set; }
```

- *Type:* object

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#volume ContainerAppJob#volume}

---

### ContainerAppJobTemplateContainer <a name="ContainerAppJobTemplateContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainer {
    double Cpu,
    string Image,
    string Memory,
    string Name,
    string[] Args = null,
    string[] Command = null,
    object Env = null,
    object LivenessProbe = null,
    object ReadinessProbe = null,
    object StartupProbe = null,
    object VolumeMounts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu">Cpu</a></code> | <code>double</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image">Image</a></code> | <code>string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory">Memory</a></code> | <code>string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name">Name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args">Args</a></code> | <code>string[]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command">Command</a></code> | <code>string[]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe">LivenessProbe</a></code> | <code>object</code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe">ReadinessProbe</a></code> | <code>object</code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe">StartupProbe</a></code> | <code>object</code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts">VolumeMounts</a></code> | <code>object</code> | volume_mounts block. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.livenessProbe"></a>

```csharp
public object LivenessProbe { get; set; }
```

- *Type:* object

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#liveness_probe ContainerAppJob#liveness_probe}

---

##### `ReadinessProbe`<sup>Optional</sup> <a name="ReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.readinessProbe"></a>

```csharp
public object ReadinessProbe { get; set; }
```

- *Type:* object

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#readiness_probe ContainerAppJob#readiness_probe}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.startupProbe"></a>

```csharp
public object StartupProbe { get; set; }
```

- *Type:* object

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#startup_probe ContainerAppJob#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainer.property.volumeMounts"></a>

```csharp
public object VolumeMounts { get; set; }
```

- *Type:* object

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateContainerEnv <a name="ContainerAppJobTemplateContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerEnv {
    string Name,
    string SecretName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name">Name</a></code> | <code>string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName">SecretName</a></code> | <code>string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value">Value</a></code> | <code>string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerLivenessProbe <a name="ContainerAppJobTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerLivenessProbe {
    double Port,
    string Transport,
    double FailureCountThreshold = null,
    object Header = null,
    string Host = null,
    double InitialDelay = null,
    double IntervalSeconds = null,
    string Path = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port">Port</a></code> | <code>double</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport">Transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>double</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host">Host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay">InitialDelay</a></code> | <code>double</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path">Path</a></code> | <code>string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout">Timeout</a></code> | <code>double</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.transport"></a>

```csharp
public string Transport { get; set; }
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `FailureCountThreshold`<sup>Optional</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```csharp
public double FailureCountThreshold { get; set; }
```

- *Type:* double

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.initialDelay"></a>

```csharp
public double InitialDelay { get; set; }
```

- *Type:* double

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `1` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbe.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerLivenessProbeHeader <a name="ContainerAppJobTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerLivenessProbeHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name">Name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value">Value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerReadinessProbe <a name="ContainerAppJobTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerReadinessProbe {
    double Port,
    string Transport,
    double FailureCountThreshold = null,
    object Header = null,
    string Host = null,
    double InitialDelay = null,
    double IntervalSeconds = null,
    string Path = null,
    double SuccessCountThreshold = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port">Port</a></code> | <code>double</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport">Transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>double</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host">Host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.initialDelay">InitialDelay</a></code> | <code>double</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path">Path</a></code> | <code>string</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold">SuccessCountThreshold</a></code> | <code>double</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout">Timeout</a></code> | <code>double</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.transport"></a>

```csharp
public string Transport { get; set; }
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `FailureCountThreshold`<sup>Optional</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```csharp
public double FailureCountThreshold { get; set; }
```

- *Type:* double

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.initialDelay"></a>

```csharp
public double InitialDelay { get; set; }
```

- *Type:* double

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `0` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `SuccessCountThreshold`<sup>Optional</sup> <a name="SuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```csharp
public double SuccessCountThreshold { get; set; }
```

- *Type:* double

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#success_count_threshold ContainerAppJob#success_count_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbe.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerReadinessProbeHeader <a name="ContainerAppJobTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerReadinessProbeHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name">Name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value">Value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerStartupProbe <a name="ContainerAppJobTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerStartupProbe {
    double Port,
    string Transport,
    double FailureCountThreshold = null,
    object Header = null,
    string Host = null,
    double InitialDelay = null,
    double IntervalSeconds = null,
    string Path = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port">Port</a></code> | <code>double</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport">Transport</a></code> | <code>string</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>double</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host">Host</a></code> | <code>string</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.initialDelay">InitialDelay</a></code> | <code>double</code> | The number of seconds elapsed after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path">Path</a></code> | <code>string</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout">Timeout</a></code> | <code>double</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#port ContainerAppJob#port}

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.transport"></a>

```csharp
public string Transport { get; set; }
```

- *Type:* string

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#transport ContainerAppJob#transport}

---

##### `FailureCountThreshold`<sup>Optional</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```csharp
public double FailureCountThreshold { get; set; }
```

- *Type:* double

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `30`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#header ContainerAppJob#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#host ContainerAppJob#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.initialDelay"></a>

```csharp
public double InitialDelay { get; set; }
```

- *Type:* double

The number of seconds elapsed after the container has started before the probe is initiated.

Possible values are between `0` and `60`. Defaults to `0` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbe.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}

---

### ContainerAppJobTemplateContainerStartupProbeHeader <a name="ContainerAppJobTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerStartupProbeHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name">Name</a></code> | <code>string</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value">Value</a></code> | <code>string</code> | The HTTP Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateContainerVolumeMounts <a name="ContainerAppJobTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerVolumeMounts {
    string Name,
    string Path,
    string SubPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name">Name</a></code> | <code>string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path">Path</a></code> | <code>string</code> | The path in the container at which to mount this volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.subPath">SubPath</a></code> | <code>string</code> | The sub path of the volume to be mounted in the container. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMounts.property.subPath"></a>

```csharp
public string SubPath { get; set; }
```

- *Type:* string

The sub path of the volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#sub_path ContainerAppJob#sub_path}

---

### ContainerAppJobTemplateInitContainer <a name="ContainerAppJobTemplateInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainer {
    string Image,
    string Name,
    string[] Args = null,
    string[] Command = null,
    double Cpu = null,
    object Env = null,
    string Memory = null,
    object VolumeMounts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image">Image</a></code> | <code>string</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name">Name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args">Args</a></code> | <code>string[]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command">Command</a></code> | <code>string[]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu">Cpu</a></code> | <code>double</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory">Memory</a></code> | <code>string</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts">VolumeMounts</a></code> | <code>object</code> | volume_mounts block. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#image ContainerAppJob#image}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#args ContainerAppJob#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#command ContainerAppJob#command}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#env ContainerAppJob#env}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`. When there's a workload profile specified, there's no such constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#memory ContainerAppJob#memory}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainer.property.volumeMounts"></a>

```csharp
public object VolumeMounts { get; set; }
```

- *Type:* object

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}

---

### ContainerAppJobTemplateInitContainerEnv <a name="ContainerAppJobTemplateInitContainerEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerEnv {
    string Name,
    string SecretName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name">Name</a></code> | <code>string</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName">SecretName</a></code> | <code>string</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value">Value</a></code> | <code>string</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#value ContainerAppJob#value}

---

### ContainerAppJobTemplateInitContainerVolumeMounts <a name="ContainerAppJobTemplateInitContainerVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerVolumeMounts {
    string Name,
    string Path,
    string SubPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name">Name</a></code> | <code>string</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path">Path</a></code> | <code>string</code> | The path in the container at which to mount this volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.subPath">SubPath</a></code> | <code>string</code> | The sub path of the volume to be mounted in the container. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#path ContainerAppJob#path}

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMounts.property.subPath"></a>

```csharp
public string SubPath { get; set; }
```

- *Type:* string

The sub path of the volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#sub_path ContainerAppJob#sub_path}

---

### ContainerAppJobTemplateVolume <a name="ContainerAppJobTemplateVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateVolume {
    string Name,
    string MountOptions = null,
    string StorageName = null,
    string StorageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name">Name</a></code> | <code>string</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.mountOptions">MountOptions</a></code> | <code>string</code> | Mount options used while mounting the AzureFile. Must be a comma-separated string. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName">StorageName</a></code> | <code>string</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType">StorageType</a></code> | <code>string</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#name ContainerAppJob#name}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.mountOptions"></a>

```csharp
public string MountOptions { get; set; }
```

- *Type:* string

Mount options used while mounting the AzureFile. Must be a comma-separated string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#mount_options ContainerAppJob#mount_options}

---

##### `StorageName`<sup>Optional</sup> <a name="StorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageName"></a>

```csharp
public string StorageName { get; set; }
```

- *Type:* string

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#storage_name ContainerAppJob#storage_name}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolume.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#storage_type ContainerAppJob#storage_type}

---

### ContainerAppJobTimeouts <a name="ContainerAppJobTimeouts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#create ContainerAppJob#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#delete ContainerAppJob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#read ContainerAppJob#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#update ContainerAppJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#create ContainerAppJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#delete ContainerAppJob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#read ContainerAppJob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_job#update ContainerAppJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppJobEventTriggerConfigOutputReference <a name="ContainerAppJobEventTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScale` <a name="PutScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale"></a>

```csharp
private void PutScale(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.putScale.parameter.value"></a>

- *Type:* object

---

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetParallelism"></a>

```csharp
private void ResetParallelism()
```

##### `ResetReplicaCompletionCount` <a name="ResetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```csharp
private void ResetReplicaCompletionCount()
```

##### `ResetScale` <a name="ResetScale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.resetScale"></a>

```csharp
private void ResetScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale">Scale</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput">ReplicaCompletionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput">ScaleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scale"></a>

```csharp
public ContainerAppJobEventTriggerConfigScaleList Scale { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList">ContainerAppJobEventTriggerConfigScaleList</a>

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `ReplicaCompletionCountInput`<sup>Optional</sup> <a name="ReplicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```csharp
public double ReplicaCompletionCountInput { get; }
```

- *Type:* double

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.scaleInput"></a>

```csharp
public object ScaleInput { get; }
```

- *Type:* object

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `ReplicaCompletionCount`<sup>Required</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```csharp
public double ReplicaCompletionCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAppJobEventTriggerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfig">ContainerAppJobEventTriggerConfig</a>

---


### ContainerAppJobEventTriggerConfigScaleList <a name="ContainerAppJobEventTriggerConfigScaleList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get"></a>

```csharp
private ContainerAppJobEventTriggerConfigScaleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobEventTriggerConfigScaleOutputReference <a name="ContainerAppJobEventTriggerConfigScaleOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetMaxExecutions` <a name="ResetMaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMaxExecutions"></a>

```csharp
private void ResetMaxExecutions()
```

##### `ResetMinExecutions` <a name="ResetMinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetMinExecutions"></a>

```csharp
private void ResetMinExecutions()
```

##### `ResetPollingIntervalInSeconds` <a name="ResetPollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetPollingIntervalInSeconds"></a>

```csharp
private void ResetPollingIntervalInSeconds()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput">MaxExecutionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput">MinExecutionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput">PollingIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions">MaxExecutions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions">MinExecutions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds">PollingIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rules"></a>

```csharp
public ContainerAppJobEventTriggerConfigScaleRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList">ContainerAppJobEventTriggerConfigScaleRulesList</a>

---

##### `MaxExecutionsInput`<sup>Optional</sup> <a name="MaxExecutionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutionsInput"></a>

```csharp
public double MaxExecutionsInput { get; }
```

- *Type:* double

---

##### `MinExecutionsInput`<sup>Optional</sup> <a name="MinExecutionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutionsInput"></a>

```csharp
public double MinExecutionsInput { get; }
```

- *Type:* double

---

##### `PollingIntervalInSecondsInput`<sup>Optional</sup> <a name="PollingIntervalInSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSecondsInput"></a>

```csharp
public double PollingIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `MaxExecutions`<sup>Required</sup> <a name="MaxExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.maxExecutions"></a>

```csharp
public double MaxExecutions { get; }
```

- *Type:* double

---

##### `MinExecutions`<sup>Required</sup> <a name="MinExecutions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.minExecutions"></a>

```csharp
public double MinExecutions { get; }
```

- *Type:* double

---

##### `PollingIntervalInSeconds`<sup>Required</sup> <a name="PollingIntervalInSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.pollingIntervalInSeconds"></a>

```csharp
public double PollingIntervalInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get"></a>

```csharp
private ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput">TriggerParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter">TriggerParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `TriggerParameterInput`<sup>Optional</sup> <a name="TriggerParameterInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameterInput"></a>

```csharp
public string TriggerParameterInput { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `TriggerParameter`<sup>Required</sup> <a name="TriggerParameter" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.triggerParameter"></a>

```csharp
public string TriggerParameter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobEventTriggerConfigScaleRulesList <a name="ContainerAppJobEventTriggerConfigScaleRulesList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get"></a>

```csharp
private ContainerAppJobEventTriggerConfigScaleRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobEventTriggerConfigScaleRulesOutputReference <a name="ContainerAppJobEventTriggerConfigScaleRulesOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobEventTriggerConfigScaleRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication"></a>

```csharp
private void PutAuthentication(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.putAuthentication.parameter.value"></a>

- *Type:* object

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput">CustomRuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType">CustomRuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authentication"></a>

```csharp
public ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList">ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.authenticationInput"></a>

```csharp
public object AuthenticationInput { get; }
```

- *Type:* object

---

##### `CustomRuleTypeInput`<sup>Optional</sup> <a name="CustomRuleTypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleTypeInput"></a>

```csharp
public string CustomRuleTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CustomRuleType`<sup>Required</sup> <a name="CustomRuleType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.customRuleType"></a>

```csharp
public string CustomRuleType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobEventTriggerConfigScaleRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobIdentityOutputReference <a name="ContainerAppJobIdentityOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentityOutputReference.property.internalValue"></a>

```csharp
public ContainerAppJobIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobIdentity">ContainerAppJobIdentity</a>

---


### ContainerAppJobManualTriggerConfigOutputReference <a name="ContainerAppJobManualTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobManualTriggerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetParallelism"></a>

```csharp
private void ResetParallelism()
```

##### `ResetReplicaCompletionCount` <a name="ResetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```csharp
private void ResetReplicaCompletionCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput">ReplicaCompletionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `ReplicaCompletionCountInput`<sup>Optional</sup> <a name="ReplicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```csharp
public double ReplicaCompletionCountInput { get; }
```

- *Type:* double

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `ReplicaCompletionCount`<sup>Required</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```csharp
public double ReplicaCompletionCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAppJobManualTriggerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobManualTriggerConfig">ContainerAppJobManualTriggerConfig</a>

---


### ContainerAppJobRegistryList <a name="ContainerAppJobRegistryList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobRegistryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get"></a>

```csharp
private ContainerAppJobRegistryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobRegistryOutputReference <a name="ContainerAppJobRegistryOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobRegistryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetPasswordSecretName` <a name="ResetPasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetPasswordSecretName"></a>

```csharp
private void ResetPasswordSecretName()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput">IdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput">PasswordSecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName">PasswordSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identityInput"></a>

```csharp
public string IdentityInput { get; }
```

- *Type:* string

---

##### `PasswordSecretNameInput`<sup>Optional</sup> <a name="PasswordSecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretNameInput"></a>

```csharp
public string PasswordSecretNameInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `PasswordSecretName`<sup>Required</sup> <a name="PasswordSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.passwordSecretName"></a>

```csharp
public string PasswordSecretName { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobRegistryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobScheduleTriggerConfigOutputReference <a name="ContainerAppJobScheduleTriggerConfigOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobScheduleTriggerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetParallelism"></a>

```csharp
private void ResetParallelism()
```

##### `ResetReplicaCompletionCount` <a name="ResetReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.resetReplicaCompletionCount"></a>

```csharp
private void ResetReplicaCompletionCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput">ReplicaCompletionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount">ReplicaCompletionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `ReplicaCompletionCountInput`<sup>Optional</sup> <a name="ReplicaCompletionCountInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCountInput"></a>

```csharp
public double ReplicaCompletionCountInput { get; }
```

- *Type:* double

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `ReplicaCompletionCount`<sup>Required</sup> <a name="ReplicaCompletionCount" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.replicaCompletionCount"></a>

```csharp
public double ReplicaCompletionCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAppJobScheduleTriggerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobScheduleTriggerConfig">ContainerAppJobScheduleTriggerConfig</a>

---


### ContainerAppJobSecretList <a name="ContainerAppJobSecretList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get"></a>

```csharp
private ContainerAppJobSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobSecretOutputReference <a name="ContainerAppJobSecretOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKeyVaultSecretId` <a name="ResetKeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetKeyVaultSecretId"></a>

```csharp
private void ResetKeyVaultSecretId()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput">IdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput">KeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identityInput"></a>

```csharp
public string IdentityInput { get; }
```

- *Type:* string

---

##### `KeyVaultSecretIdInput`<sup>Optional</sup> <a name="KeyVaultSecretIdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretIdInput"></a>

```csharp
public string KeyVaultSecretIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.keyVaultSecretId"></a>

```csharp
public string KeyVaultSecretId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerEnvList <a name="ContainerAppJobTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get"></a>

```csharp
private ContainerAppJobTemplateContainerEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerEnvOutputReference <a name="ContainerAppJobTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerList <a name="ContainerAppJobTemplateContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get"></a>

```csharp
private ContainerAppJobTemplateContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderList <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerLivenessProbeHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get"></a>

```csharp
private ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerLivenessProbeList <a name="ContainerAppJobTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerLivenessProbeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get"></a>

```csharp
private ContainerAppJobTemplateContainerLivenessProbeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerLivenessProbeOutputReference <a name="ContainerAppJobTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerLivenessProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetFailureCountThreshold` <a name="ResetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```csharp
private void ResetFailureCountThreshold()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```csharp
private void ResetInitialDelay()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">TerminationGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">FailureCountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput">TransportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay">InitialDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport">Transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.header"></a>

```csharp
public ContainerAppJobTemplateContainerLivenessProbeHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeHeaderList">ContainerAppJobTemplateContainerLivenessProbeHeaderList</a>

---

##### `TerminationGracePeriodSeconds`<sup>Required</sup> <a name="TerminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```csharp
public double TerminationGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `FailureCountThresholdInput`<sup>Optional</sup> <a name="FailureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```csharp
public double FailureCountThresholdInput { get; }
```

- *Type:* double

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```csharp
public double InitialDelayInput { get; }
```

- *Type:* double

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```csharp
public string TransportInput { get; }
```

- *Type:* string

---

##### `FailureCountThreshold`<sup>Required</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```csharp
public double FailureCountThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```csharp
public double InitialDelay { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```csharp
public string Transport { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerOutputReference <a name="ContainerAppJobTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe"></a>

```csharp
private void PutLivenessProbe(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* object

---

##### `PutReadinessProbe` <a name="PutReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe"></a>

```csharp
private void PutReadinessProbe(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* object

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe"></a>

```csharp
private void PutStartupProbe(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* object

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts"></a>

```csharp
private void PutVolumeMounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* object

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetLivenessProbe"></a>

```csharp
private void ResetLivenessProbe()
```

##### `ResetReadinessProbe` <a name="ResetReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetReadinessProbe"></a>

```csharp
private void ResetReadinessProbe()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetStartupProbe"></a>

```csharp
private void ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.resetVolumeMounts"></a>

```csharp
private void ResetVolumeMounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe">ReadinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput">ReadinessProbeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.env"></a>

```csharp
public ContainerAppJobTemplateContainerEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerEnvList">ContainerAppJobTemplateContainerEnvList</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.ephemeralStorage"></a>

```csharp
public string EphemeralStorage { get; }
```

- *Type:* string

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbe"></a>

```csharp
public ContainerAppJobTemplateContainerLivenessProbeList LivenessProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerLivenessProbeList">ContainerAppJobTemplateContainerLivenessProbeList</a>

---

##### `ReadinessProbe`<sup>Required</sup> <a name="ReadinessProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbe"></a>

```csharp
public ContainerAppJobTemplateContainerReadinessProbeList ReadinessProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList">ContainerAppJobTemplateContainerReadinessProbeList</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbe"></a>

```csharp
public ContainerAppJobTemplateContainerStartupProbeList StartupProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList">ContainerAppJobTemplateContainerStartupProbeList</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMounts"></a>

```csharp
public ContainerAppJobTemplateContainerVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList">ContainerAppJobTemplateContainerVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.livenessProbeInput"></a>

```csharp
public object LivenessProbeInput { get; }
```

- *Type:* object

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadinessProbeInput`<sup>Optional</sup> <a name="ReadinessProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.readinessProbeInput"></a>

```csharp
public object ReadinessProbeInput { get; }
```

- *Type:* object

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.startupProbeInput"></a>

```csharp
public object StartupProbeInput { get; }
```

- *Type:* object

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.volumeMountsInput"></a>

```csharp
public object VolumeMountsInput { get; }
```

- *Type:* object

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderList <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerReadinessProbeHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get"></a>

```csharp
private ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerReadinessProbeList <a name="ContainerAppJobTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerReadinessProbeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get"></a>

```csharp
private ContainerAppJobTemplateContainerReadinessProbeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerReadinessProbeOutputReference <a name="ContainerAppJobTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerReadinessProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetFailureCountThreshold` <a name="ResetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```csharp
private void ResetFailureCountThreshold()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetInitialDelay"></a>

```csharp
private void ResetInitialDelay()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSuccessCountThreshold` <a name="ResetSuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```csharp
private void ResetSuccessCountThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">FailureCountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">SuccessCountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput">TransportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelay">InitialDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">SuccessCountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport">Transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.header"></a>

```csharp
public ContainerAppJobTemplateContainerReadinessProbeHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeHeaderList">ContainerAppJobTemplateContainerReadinessProbeHeaderList</a>

---

##### `FailureCountThresholdInput`<sup>Optional</sup> <a name="FailureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```csharp
public double FailureCountThresholdInput { get; }
```

- *Type:* double

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelayInput"></a>

```csharp
public double InitialDelayInput { get; }
```

- *Type:* double

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SuccessCountThresholdInput`<sup>Optional</sup> <a name="SuccessCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```csharp
public double SuccessCountThresholdInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```csharp
public string TransportInput { get; }
```

- *Type:* string

---

##### `FailureCountThreshold`<sup>Required</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```csharp
public double FailureCountThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.initialDelay"></a>

```csharp
public double InitialDelay { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SuccessCountThreshold`<sup>Required</sup> <a name="SuccessCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```csharp
public double SuccessCountThreshold { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```csharp
public string Transport { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerStartupProbeHeaderList <a name="ContainerAppJobTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerStartupProbeHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get"></a>

```csharp
private ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerStartupProbeList <a name="ContainerAppJobTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerStartupProbeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get"></a>

```csharp
private ContainerAppJobTemplateContainerStartupProbeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerStartupProbeOutputReference <a name="ContainerAppJobTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerStartupProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetFailureCountThreshold` <a name="ResetFailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```csharp
private void ResetFailureCountThreshold()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetInitialDelay"></a>

```csharp
private void ResetInitialDelay()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">TerminationGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">FailureCountThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput">TransportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">FailureCountThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelay">InitialDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport">Transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.header"></a>

```csharp
public ContainerAppJobTemplateContainerStartupProbeHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeHeaderList">ContainerAppJobTemplateContainerStartupProbeHeaderList</a>

---

##### `TerminationGracePeriodSeconds`<sup>Required</sup> <a name="TerminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```csharp
public double TerminationGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `FailureCountThresholdInput`<sup>Optional</sup> <a name="FailureCountThresholdInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```csharp
public double FailureCountThresholdInput { get; }
```

- *Type:* double

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelayInput"></a>

```csharp
public double InitialDelayInput { get; }
```

- *Type:* double

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```csharp
public string TransportInput { get; }
```

- *Type:* string

---

##### `FailureCountThreshold`<sup>Required</sup> <a name="FailureCountThreshold" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```csharp
public double FailureCountThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.initialDelay"></a>

```csharp
public double InitialDelay { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.transport"></a>

```csharp
public string Transport { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerVolumeMountsList <a name="ContainerAppJobTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get"></a>

```csharp
private ContainerAppJobTemplateContainerVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateContainerVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubPath` <a name="ResetSubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.resetSubPath"></a>

```csharp
private void ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPathInput"></a>

```csharp
public string SubPathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.subPath"></a>

```csharp
public string SubPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateInitContainerEnvList <a name="ContainerAppJobTemplateInitContainerEnvList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get"></a>

```csharp
private ContainerAppJobTemplateInitContainerEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateInitContainerEnvOutputReference <a name="ContainerAppJobTemplateInitContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateInitContainerList <a name="ContainerAppJobTemplateInitContainerList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get"></a>

```csharp
private ContainerAppJobTemplateInitContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateInitContainerOutputReference <a name="ContainerAppJobTemplateInitContainerOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts"></a>

```csharp
private void PutVolumeMounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* object

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.resetVolumeMounts"></a>

```csharp
private void ResetVolumeMounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.env"></a>

```csharp
public ContainerAppJobTemplateInitContainerEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerEnvList">ContainerAppJobTemplateInitContainerEnvList</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.ephemeralStorage"></a>

```csharp
public string EphemeralStorage { get; }
```

- *Type:* string

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMounts"></a>

```csharp
public ContainerAppJobTemplateInitContainerVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList">ContainerAppJobTemplateInitContainerVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.volumeMountsInput"></a>

```csharp
public object VolumeMountsInput { get; }
```

- *Type:* object

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateInitContainerVolumeMountsList <a name="ContainerAppJobTemplateInitContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get"></a>

```csharp
private ContainerAppJobTemplateInitContainerVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateInitContainerVolumeMountsOutputReference <a name="ContainerAppJobTemplateInitContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateInitContainerVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubPath` <a name="ResetSubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.resetSubPath"></a>

```csharp
private void ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPathInput"></a>

```csharp
public string SubPathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.subPath"></a>

```csharp
public string SubPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateOutputReference <a name="ContainerAppJobTemplateOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer"></a>

```csharp
private void PutContainer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* object

---

##### `PutInitContainer` <a name="PutInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer"></a>

```csharp
private void PutInitContainer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putInitContainer.parameter.value"></a>

- *Type:* object

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume"></a>

```csharp
private void PutVolume(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* object

---

##### `ResetInitContainer` <a name="ResetInitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetInitContainer"></a>

```csharp
private void ResetInitContainer()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.resetVolume"></a>

```csharp
private void ResetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer">InitContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput">ContainerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput">InitContainerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput">VolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.container"></a>

```csharp
public ContainerAppJobTemplateContainerList Container { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateContainerList">ContainerAppJobTemplateContainerList</a>

---

##### `InitContainer`<sup>Required</sup> <a name="InitContainer" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainer"></a>

```csharp
public ContainerAppJobTemplateInitContainerList InitContainer { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateInitContainerList">ContainerAppJobTemplateInitContainerList</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volume"></a>

```csharp
public ContainerAppJobTemplateVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList">ContainerAppJobTemplateVolumeList</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.containerInput"></a>

```csharp
public object ContainerInput { get; }
```

- *Type:* object

---

##### `InitContainerInput`<sup>Optional</sup> <a name="InitContainerInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.initContainerInput"></a>

```csharp
public object InitContainerInput { get; }
```

- *Type:* object

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.volumeInput"></a>

```csharp
public object VolumeInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateOutputReference.property.internalValue"></a>

```csharp
public ContainerAppJobTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplate">ContainerAppJobTemplate</a>

---


### ContainerAppJobTemplateVolumeList <a name="ContainerAppJobTemplateVolumeList" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get"></a>

```csharp
private ContainerAppJobTemplateVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTemplateVolumeOutputReference <a name="ContainerAppJobTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTemplateVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetStorageName` <a name="ResetStorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageName"></a>

```csharp
private void ResetStorageName()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.resetStorageType"></a>

```csharp
private void ResetStorageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput">StorageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptions">MountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName">StorageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptionsInput"></a>

```csharp
public string MountOptionsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageNameInput`<sup>Optional</sup> <a name="StorageNameInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageNameInput"></a>

```csharp
public string StorageNameInput { get; }
```

- *Type:* string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.mountOptions"></a>

```csharp
public string MountOptions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageName`<sup>Required</sup> <a name="StorageName" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageName"></a>

```csharp
public string StorageName { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTemplateVolumeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppJobTimeoutsOutputReference <a name="ContainerAppJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppJob.ContainerAppJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



