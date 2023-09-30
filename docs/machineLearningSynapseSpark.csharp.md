# `azurerm_machine_learning_synapse_spark`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_synapse_spark`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark).

# `machineLearningSynapseSpark` Submodule <a name="`machineLearningSynapseSpark` Submodule" id="@cdktf/provider-azurerm.machineLearningSynapseSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningSynapseSpark <a name="MachineLearningSynapseSpark" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark azurerm_machine_learning_synapse_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningSynapseSpark(Construct Scope, string Id, MachineLearningSynapseSparkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig">MachineLearningSynapseSparkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig">MachineLearningSynapseSparkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity"></a>

```csharp
private void PutIdentity(MachineLearningSynapseSparkIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts"></a>

```csharp
private void PutTimeouts(MachineLearningSynapseSparkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningSynapseSpark.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningSynapseSpark.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningSynapseSpark.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput">MachineLearningWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput">SynapseSparkPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId">SynapseSparkPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity"></a>

```csharp
public MachineLearningSynapseSparkIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts"></a>

```csharp
public MachineLearningSynapseSparkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput"></a>

```csharp
public MachineLearningSynapseSparkIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput"></a>

```csharp
public object LocalAuthEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MachineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="MachineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput"></a>

```csharp
public string MachineLearningWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SynapseSparkPoolIdInput`<sup>Optional</sup> <a name="SynapseSparkPoolIdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput"></a>

```csharp
public string SynapseSparkPoolIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId"></a>

```csharp
public string MachineLearningWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SynapseSparkPoolId`<sup>Required</sup> <a name="SynapseSparkPoolId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId"></a>

```csharp
public string SynapseSparkPoolId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningSynapseSparkConfig <a name="MachineLearningSynapseSparkConfig" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningSynapseSparkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MachineLearningWorkspaceId,
    string Name,
    string SynapseSparkPoolId,
    string Description = null,
    string Id = null,
    MachineLearningSynapseSparkIdentity Identity = null,
    object LocalAuthEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MachineLearningSynapseSparkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId">SynapseSparkPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}.

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId"></a>

```csharp
public string MachineLearningWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}.

---

##### `SynapseSparkPoolId`<sup>Required</sup> <a name="SynapseSparkPoolId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId"></a>

```csharp
public string SynapseSparkPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity"></a>

```csharp
public MachineLearningSynapseSparkIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#identity MachineLearningSynapseSpark#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts"></a>

```csharp
public MachineLearningSynapseSparkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#timeouts MachineLearningSynapseSpark#timeouts}

---

### MachineLearningSynapseSparkIdentity <a name="MachineLearningSynapseSparkIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningSynapseSparkIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}.

---

### MachineLearningSynapseSparkTimeouts <a name="MachineLearningSynapseSparkTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningSynapseSparkTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningSynapseSparkIdentityOutputReference <a name="MachineLearningSynapseSparkIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningSynapseSparkIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue"></a>

```csharp
public MachineLearningSynapseSparkIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---


### MachineLearningSynapseSparkTimeoutsOutputReference <a name="MachineLearningSynapseSparkTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningSynapseSparkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



