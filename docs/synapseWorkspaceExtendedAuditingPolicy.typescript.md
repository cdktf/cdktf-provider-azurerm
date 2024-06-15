# `synapseWorkspaceExtendedAuditingPolicy` Submodule <a name="`synapseWorkspaceExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceExtendedAuditingPolicy <a name="SynapseWorkspaceExtendedAuditingPolicy" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy azurerm_synapse_workspace_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

new synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy(scope: Construct, id: string, config: SynapseWorkspaceExtendedAuditingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig">SynapseWorkspaceExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig">SynapseWorkspaceExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetLogMonitoringEnabled">resetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">resetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapseWorkspaceExtendedAuditingPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogMonitoringEnabled` <a name="resetLogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```typescript
public resetLogMonitoringEnabled(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageAccountAccessKeyIsSecondary` <a name="resetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```typescript
public resetStorageAccountAccessKeyIsSecondary(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseWorkspaceExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SynapseWorkspaceExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseWorkspaceExtendedAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseWorkspaceExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference">SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabledInput">logMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storageAccountAccessKeyIsSecondaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference">SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logMonitoringEnabledInput`<sup>Optional</sup> <a name="logMonitoringEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```typescript
public readonly logMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceIdInput"></a>

```typescript
public readonly synapseWorkspaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynapseWorkspaceExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logMonitoringEnabled`<sup>Required</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceExtendedAuditingPolicyConfig <a name="SynapseWorkspaceExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.Initializer"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

const synapseWorkspaceExtendedAuditingPolicyConfig: synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseWorkspaceExtendedAuditingPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#timeouts SynapseWorkspaceExtendedAuditingPolicy#timeouts}

---

### SynapseWorkspaceExtendedAuditingPolicyTimeouts <a name="SynapseWorkspaceExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.Initializer"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

const synapseWorkspaceExtendedAuditingPolicyTimeouts: synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference <a name="SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapseWorkspaceExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

new synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynapseWorkspaceExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

---



