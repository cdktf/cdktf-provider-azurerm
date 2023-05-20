# `azurerm_storage_mover_job_definition`

Refer to the Terraform Registory for docs: [`azurerm_storage_mover_job_definition`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition).

# `storageMoverJobDefinition` Submodule <a name="`storageMoverJobDefinition` Submodule" id="@cdktf/provider-azurerm.storageMoverJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageMoverJobDefinition <a name="StorageMoverJobDefinition" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition azurerm_storage_mover_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageMoverJobDefinition(Construct Scope, string Id, StorageMoverJobDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig">StorageMoverJobDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig">StorageMoverJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName">ResetAgentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath">ResetSourceSubPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath">ResetTargetSubPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageMoverJobDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

---

##### `ResetAgentName` <a name="ResetAgentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName"></a>

```csharp
private void ResetAgentName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSourceSubPath` <a name="ResetSourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath"></a>

```csharp
private void ResetSourceSubPath()
```

##### `ResetTargetSubPath` <a name="ResetTargetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath"></a>

```csharp
private void ResetTargetSubPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageMoverJobDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageMoverJobDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageMoverJobDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput">AgentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput">CopyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput">SourceSubPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput">StorageMoverProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput">TargetSubPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName">AgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode">CopyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath">SourceSubPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId">StorageMoverProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath">TargetSubPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts"></a>

```csharp
public StorageMoverJobDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a>

---

##### `AgentNameInput`<sup>Optional</sup> <a name="AgentNameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput"></a>

```csharp
public string AgentNameInput { get; }
```

- *Type:* string

---

##### `CopyModeInput`<sup>Optional</sup> <a name="CopyModeInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput"></a>

```csharp
public string CopyModeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceSubPathInput`<sup>Optional</sup> <a name="SourceSubPathInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput"></a>

```csharp
public string SourceSubPathInput { get; }
```

- *Type:* string

---

##### `StorageMoverProjectIdInput`<sup>Optional</sup> <a name="StorageMoverProjectIdInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput"></a>

```csharp
public string StorageMoverProjectIdInput { get; }
```

- *Type:* string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `TargetSubPathInput`<sup>Optional</sup> <a name="TargetSubPathInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput"></a>

```csharp
public string TargetSubPathInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName"></a>

```csharp
public string AgentName { get; }
```

- *Type:* string

---

##### `CopyMode`<sup>Required</sup> <a name="CopyMode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode"></a>

```csharp
public string CopyMode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceSubPath`<sup>Required</sup> <a name="SourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath"></a>

```csharp
public string SourceSubPath { get; }
```

- *Type:* string

---

##### `StorageMoverProjectId`<sup>Required</sup> <a name="StorageMoverProjectId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId"></a>

```csharp
public string StorageMoverProjectId { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `TargetSubPath`<sup>Required</sup> <a name="TargetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath"></a>

```csharp
public string TargetSubPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageMoverJobDefinitionConfig <a name="StorageMoverJobDefinitionConfig" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageMoverJobDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CopyMode,
    string Name,
    string SourceName,
    string StorageMoverProjectId,
    string TargetName,
    string AgentName = null,
    string Description = null,
    string Id = null,
    string SourceSubPath = null,
    string TargetSubPath = null,
    StorageMoverJobDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode">CopyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId">StorageMoverProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName">AgentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath">SourceSubPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath">TargetSubPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CopyMode`<sup>Required</sup> <a name="CopyMode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode"></a>

```csharp
public string CopyMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}.

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}.

---

##### `StorageMoverProjectId`<sup>Required</sup> <a name="StorageMoverProjectId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId"></a>

```csharp
public string StorageMoverProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}.

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}.

---

##### `AgentName`<sup>Optional</sup> <a name="AgentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName"></a>

```csharp
public string AgentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceSubPath`<sup>Optional</sup> <a name="SourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath"></a>

```csharp
public string SourceSubPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}.

---

##### `TargetSubPath`<sup>Optional</sup> <a name="TargetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath"></a>

```csharp
public string TargetSubPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts"></a>

```csharp
public StorageMoverJobDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#timeouts StorageMoverJobDefinition#timeouts}

---

### StorageMoverJobDefinitionTimeouts <a name="StorageMoverJobDefinitionTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageMoverJobDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageMoverJobDefinitionTimeoutsOutputReference <a name="StorageMoverJobDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageMoverJobDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



