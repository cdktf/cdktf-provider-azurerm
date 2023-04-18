# `azurerm_synapse_linked_service`

Refer to the Terraform Registory for docs: [`azurerm_synapse_linked_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service).

# `synapseLinkedService` Submodule <a name="`synapseLinkedService` Submodule" id="@cdktf/provider-azurerm.synapseLinkedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseLinkedService <a name="SynapseLinkedService" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service azurerm_synapse_linked_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

new synapseLinkedService.SynapseLinkedService(scope: Construct, id: string, config: SynapseLinkedServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig">SynapseLinkedServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig">SynapseLinkedServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime">putIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetIntegrationRuntime">resetIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIntegrationRuntime` <a name="putIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime"></a>

```typescript
public putIntegrationRuntime(value: SynapseLinkedServiceIntegrationRuntime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapseLinkedServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntime` <a name="resetIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetIntegrationRuntime"></a>

```typescript
public resetIntegrationRuntime(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

synapseLinkedService.SynapseLinkedService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

synapseLinkedService.SynapseLinkedService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

synapseLinkedService.SynapseLinkedService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntime">integrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference">SynapseLinkedServiceIntegrationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference">SynapseLinkedServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntimeInput">integrationRuntimeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJsonInput">typePropertiesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJson">typePropertiesJson</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `integrationRuntime`<sup>Required</sup> <a name="integrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntime"></a>

```typescript
public readonly integrationRuntime: SynapseLinkedServiceIntegrationRuntimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference">SynapseLinkedServiceIntegrationRuntimeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseLinkedServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference">SynapseLinkedServiceTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeInput`<sup>Optional</sup> <a name="integrationRuntimeInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntimeInput"></a>

```typescript
public readonly integrationRuntimeInput: SynapseLinkedServiceIntegrationRuntime;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceIdInput"></a>

```typescript
public readonly synapseWorkspaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SynapseLinkedServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typePropertiesJsonInput`<sup>Optional</sup> <a name="typePropertiesJsonInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJsonInput"></a>

```typescript
public readonly typePropertiesJsonInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJson"></a>

```typescript
public readonly typePropertiesJson: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseLinkedServiceConfig <a name="SynapseLinkedServiceConfig" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.Initializer"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

const synapseLinkedServiceConfig: synapseLinkedService.SynapseLinkedServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#type SynapseLinkedService#type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.typePropertiesJson">typePropertiesJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#description SynapseLinkedService#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#id SynapseLinkedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.integrationRuntime">integrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | integration_runtime block. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#type SynapseLinkedService#type}.

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.typePropertiesJson"></a>

```typescript
public readonly typePropertiesJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#description SynapseLinkedService#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#id SynapseLinkedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntime`<sup>Optional</sup> <a name="integrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.integrationRuntime"></a>

```typescript
public readonly integrationRuntime: SynapseLinkedServiceIntegrationRuntime;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

integration_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#integration_runtime SynapseLinkedService#integration_runtime}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseLinkedServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#timeouts SynapseLinkedService#timeouts}

---

### SynapseLinkedServiceIntegrationRuntime <a name="SynapseLinkedServiceIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.Initializer"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

const synapseLinkedServiceIntegrationRuntime: synapseLinkedService.SynapseLinkedServiceIntegrationRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

### SynapseLinkedServiceTimeouts <a name="SynapseLinkedServiceTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.Initializer"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

const synapseLinkedServiceTimeouts: synapseLinkedService.SynapseLinkedServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#create SynapseLinkedService#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#read SynapseLinkedService#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#update SynapseLinkedService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#create SynapseLinkedService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#read SynapseLinkedService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/synapse_linked_service#update SynapseLinkedService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseLinkedServiceIntegrationRuntimeOutputReference <a name="SynapseLinkedServiceIntegrationRuntimeOutputReference" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

new synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SynapseLinkedServiceIntegrationRuntime;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---


### SynapseLinkedServiceTimeoutsOutputReference <a name="SynapseLinkedServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapseLinkedService } from '@cdktf/provider-azurerm'

new synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SynapseLinkedServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a> | cdktf.IResolvable

---



