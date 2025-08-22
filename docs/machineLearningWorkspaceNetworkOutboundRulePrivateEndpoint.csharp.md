# `machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint` Submodule <a name="`machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint <a name="MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint(Construct Scope, string Id, MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetSparkEnabled">ResetSparkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSparkEnabled` <a name="ResetSparkEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetSparkEnabled"></a>

```csharp
private void ResetSparkEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.serviceResourceIdInput">ServiceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.sparkEnabledInput">SparkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.subResourceTargetInput">SubResourceTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.serviceResourceId">ServiceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.sparkEnabled">SparkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.subResourceTarget">SubResourceTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.timeouts"></a>

```csharp
public MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceResourceIdInput`<sup>Optional</sup> <a name="ServiceResourceIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.serviceResourceIdInput"></a>

```csharp
public string ServiceResourceIdInput { get; }
```

- *Type:* string

---

##### `SparkEnabledInput`<sup>Optional</sup> <a name="SparkEnabledInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.sparkEnabledInput"></a>

```csharp
public object SparkEnabledInput { get; }
```

- *Type:* object

---

##### `SubResourceTargetInput`<sup>Optional</sup> <a name="SubResourceTargetInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.subResourceTargetInput"></a>

```csharp
public string SubResourceTargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceResourceId`<sup>Required</sup> <a name="ServiceResourceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.serviceResourceId"></a>

```csharp
public string ServiceResourceId { get; }
```

- *Type:* string

---

##### `SparkEnabled`<sup>Required</sup> <a name="SparkEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.sparkEnabled"></a>

```csharp
public object SparkEnabled { get; }
```

- *Type:* object

---

##### `SubResourceTarget`<sup>Required</sup> <a name="SubResourceTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.subResourceTarget"></a>

```csharp
public string SubResourceTarget { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig <a name="MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ServiceResourceId,
    string SubResourceTarget,
    string WorkspaceId,
    string Id = null,
    object SparkEnabled = null,
    MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#name MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.serviceResourceId">ServiceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#service_resource_id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#service_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.subResourceTarget">SubResourceTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#sub_resource_target MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#sub_resource_target}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#workspace_id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.sparkEnabled">SparkEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#spark_enabled MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#spark_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#name MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#name}.

---

##### `ServiceResourceId`<sup>Required</sup> <a name="ServiceResourceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.serviceResourceId"></a>

```csharp
public string ServiceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#service_resource_id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#service_resource_id}.

---

##### `SubResourceTarget`<sup>Required</sup> <a name="SubResourceTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.subResourceTarget"></a>

```csharp
public string SubResourceTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#sub_resource_target MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#sub_resource_target}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#workspace_id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SparkEnabled`<sup>Optional</sup> <a name="SparkEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.sparkEnabled"></a>

```csharp
public object SparkEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#spark_enabled MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#spark_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig.property.timeouts"></a>

```csharp
public MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts">MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#timeouts MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#timeouts}

---

### MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts <a name="MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#create MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#delete MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#read MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#create MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#delete MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#read MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference <a name="MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRulePrivateEndpoint.MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



