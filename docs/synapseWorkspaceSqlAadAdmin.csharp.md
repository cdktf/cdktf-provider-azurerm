# `azurerm_synapse_workspace_sql_aad_admin`

Refer to the Terraform Registory for docs: [`azurerm_synapse_workspace_sql_aad_admin`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin).

# `synapseWorkspaceSqlAadAdmin` Submodule <a name="`synapseWorkspaceSqlAadAdmin` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceSqlAadAdminA <a name="SynapseWorkspaceSqlAadAdminA" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin azurerm_synapse_workspace_sql_aad_admin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseWorkspaceSqlAadAdminA(Construct Scope, string Id, SynapseWorkspaceSqlAadAdminAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig">SynapseWorkspaceSqlAadAdminAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig">SynapseWorkspaceSqlAadAdminAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.putTimeouts"></a>

```csharp
private void PutTimeouts(SynapseWorkspaceSqlAadAdminTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseWorkspaceSqlAadAdminA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseWorkspaceSqlAadAdminA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseWorkspaceSqlAadAdminA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference">SynapseWorkspaceSqlAadAdminTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.timeouts"></a>

```csharp
public SynapseWorkspaceSqlAadAdminTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference">SynapseWorkspaceSqlAadAdminTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.synapseWorkspaceIdInput"></a>

```csharp
public string SynapseWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.synapseWorkspaceId"></a>

```csharp
public string SynapseWorkspaceId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceSqlAadAdminAConfig <a name="SynapseWorkspaceSqlAadAdminAConfig" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseWorkspaceSqlAadAdminAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Login,
    string ObjectId,
    string SynapseWorkspaceId,
    string TenantId,
    string Id = null,
    SynapseWorkspaceSqlAadAdminTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.login">Login</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdminA#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdminA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdminA#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdminA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdminA#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdminA#login}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdminA#object_id}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.synapseWorkspaceId"></a>

```csharp
public string SynapseWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdminA#synapse_workspace_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdminA#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdminA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminAConfig.property.timeouts"></a>

```csharp
public SynapseWorkspaceSqlAadAdminTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#timeouts SynapseWorkspaceSqlAadAdminA#timeouts}

---

### SynapseWorkspaceSqlAadAdminTimeouts <a name="SynapseWorkspaceSqlAadAdminTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseWorkspaceSqlAadAdminTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdminA#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdminA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdminA#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdminA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdminA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdminA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdminA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdminA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceSqlAadAdminTimeoutsOutputReference <a name="SynapseWorkspaceSqlAadAdminTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseWorkspaceSqlAadAdminTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



