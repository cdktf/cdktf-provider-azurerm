# `azurerm_managed_application`

Refer to the Terraform Registory for docs: [`azurerm_managed_application`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application).

# `managedApplication` Submodule <a name="`managedApplication` Submodule" id="@cdktf/provider-azurerm.managedApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedApplication <a name="ManagedApplication" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application azurerm_managed_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

new managedApplication.ManagedApplication(scope: Construct, id: string, config: ManagedApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig">ManagedApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig">ManagedApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetApplicationDefinitionId">resetApplicationDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetParameterValues">resetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.putPlan"></a>

```typescript
public putPlan(value: ManagedApplicationPlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedApplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a>

---

##### `resetApplicationDefinitionId` <a name="resetApplicationDefinitionId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetApplicationDefinitionId"></a>

```typescript
public resetApplicationDefinitionId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetParameterValues"></a>

```typescript
public resetParameterValues(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.isConstruct"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

managedApplication.ManagedApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.isTerraformElement"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

managedApplication.ManagedApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.isTerraformResource"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

managedApplication.ManagedApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.outputs">outputs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference">ManagedApplicationPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference">ManagedApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.applicationDefinitionIdInput">applicationDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parameterValuesInput">parameterValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.applicationDefinitionId">applicationDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parameterValues">parameterValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.outputs"></a>

```typescript
public readonly outputs: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.plan"></a>

```typescript
public readonly plan: ManagedApplicationPlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference">ManagedApplicationPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedApplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference">ManagedApplicationTimeoutsOutputReference</a>

---

##### `applicationDefinitionIdInput`<sup>Optional</sup> <a name="applicationDefinitionIdInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.applicationDefinitionIdInput"></a>

```typescript
public readonly applicationDefinitionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.managedResourceGroupNameInput"></a>

```typescript
public readonly managedResourceGroupNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parameterValuesInput"></a>

```typescript
public readonly parameterValuesInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.planInput"></a>

```typescript
public readonly planInput: ManagedApplicationPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a>

---

##### `applicationDefinitionId`<sup>Required</sup> <a name="applicationDefinitionId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.applicationDefinitionId"></a>

```typescript
public readonly applicationDefinitionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.parameterValues"></a>

```typescript
public readonly parameterValues: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedApplication.ManagedApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedApplicationConfig <a name="ManagedApplicationConfig" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.Initializer"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

const managedApplicationConfig: managedApplication.ManagedApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#kind ManagedApplication#kind}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#location ManagedApplication#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#managed_resource_group_name ManagedApplication#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#name ManagedApplication#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#resource_group_name ManagedApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.applicationDefinitionId">applicationDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#application_definition_id ManagedApplication#application_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#id ManagedApplication#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#parameters ManagedApplication#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.parameterValues">parameterValues</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#parameter_values ManagedApplication#parameter_values}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#tags ManagedApplication#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#kind ManagedApplication#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#location ManagedApplication#location}.

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#managed_resource_group_name ManagedApplication#managed_resource_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#name ManagedApplication#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#resource_group_name ManagedApplication#resource_group_name}.

---

##### `applicationDefinitionId`<sup>Optional</sup> <a name="applicationDefinitionId" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.applicationDefinitionId"></a>

```typescript
public readonly applicationDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#application_definition_id ManagedApplication#application_definition_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#id ManagedApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#parameters ManagedApplication#parameters}.

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.parameterValues"></a>

```typescript
public readonly parameterValues: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#parameter_values ManagedApplication#parameter_values}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.plan"></a>

```typescript
public readonly plan: ManagedApplicationPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#plan ManagedApplication#plan}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#tags ManagedApplication#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedApplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#timeouts ManagedApplication#timeouts}

---

### ManagedApplicationPlan <a name="ManagedApplicationPlan" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.Initializer"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

const managedApplicationPlan: managedApplication.ManagedApplicationPlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#name ManagedApplication#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#product ManagedApplication#product}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#publisher ManagedApplication#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#version ManagedApplication#version}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.promotionCode">promotionCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#promotion_code ManagedApplication#promotion_code}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#name ManagedApplication#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#product ManagedApplication#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#publisher ManagedApplication#publisher}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#version ManagedApplication#version}.

---

##### `promotionCode`<sup>Optional</sup> <a name="promotionCode" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan.property.promotionCode"></a>

```typescript
public readonly promotionCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#promotion_code ManagedApplication#promotion_code}.

---

### ManagedApplicationTimeouts <a name="ManagedApplicationTimeouts" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.Initializer"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

const managedApplicationTimeouts: managedApplication.ManagedApplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#create ManagedApplication#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#delete ManagedApplication#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#read ManagedApplication#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#update ManagedApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#create ManagedApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#delete ManagedApplication#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#read ManagedApplication#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/managed_application#update ManagedApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedApplicationPlanOutputReference <a name="ManagedApplicationPlanOutputReference" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.Initializer"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

new managedApplication.ManagedApplicationPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.resetPromotionCode">resetPromotionCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPromotionCode` <a name="resetPromotionCode" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.resetPromotionCode"></a>

```typescript
public resetPromotionCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.promotionCodeInput">promotionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.promotionCode">promotionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `promotionCodeInput`<sup>Optional</sup> <a name="promotionCodeInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.promotionCodeInput"></a>

```typescript
public readonly promotionCodeInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `promotionCode`<sup>Required</sup> <a name="promotionCode" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.promotionCode"></a>

```typescript
public readonly promotionCode: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedApplicationPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationPlan">ManagedApplicationPlan</a>

---


### ManagedApplicationTimeoutsOutputReference <a name="ManagedApplicationTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedApplication } from '@cdktf/provider-azurerm'

new managedApplication.ManagedApplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplication.ManagedApplicationTimeouts">ManagedApplicationTimeouts</a>

---



